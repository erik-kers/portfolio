import { useEffect, useRef, useState, type PointerEvent } from 'react'

export const motionPreference = '(prefers-reduced-motion: reduce)'

type Drag = { id: number, x: number, y: number }

function setTilt(art: HTMLElement | null, pitch: number, yaw: number) {
  const limit = (angle: number) => Math.max(-18, Math.min(18, angle))
  art?.style.setProperty('--logo-pitch', `${limit(pitch)}deg`)
  art?.style.setProperty('--logo-yaw', `${limit(yaw)}deg`)
  art?.style.setProperty('--logo-depth-opacity', String(Math.min(1, Math.hypot(pitch, yaw) / 12)))
}

export default function useLogoTilt() {
  const art = useRef<HTMLSpanElement>(null)
  const drag = useRef<Drag | null>(null)
  const didDrag = useRef(false)
  const [phoneTilt, setPhoneTilt] = useState<'off' | 'on' | 'unavailable'>('off')
  const orientation = window.DeviceOrientationEvent as
    (typeof DeviceOrientationEvent & { requestPermission?: () => Promise<string> }) | undefined

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return
    didDrag.current = false
    if (window.matchMedia(motionPreference).matches) return

    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const start = drag.current
    if (start?.id !== event.pointerId) return

    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (!didDrag.current && Math.hypot(dx, dy) < 6) return

    didDrag.current = true
    setTilt(art.current, -dy * 0.22, dx * 0.22)
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    if (drag.current?.id !== event.pointerId) return
    drag.current = null
    setTilt(art.current, 0, 0)
  }

  async function togglePhoneTilt() {
    if (phoneTilt === 'on') {
      setPhoneTilt('off')
      return
    }

    try {
      const permission = await orientation?.requestPermission?.()
      setPhoneTilt(permission === undefined || permission === 'granted' ? 'on' : 'unavailable')
    } catch {
      setPhoneTilt('unavailable')
    }
  }

  useEffect(() => {
    if (phoneTilt !== 'on') return

    const target = art.current
    const motion = window.matchMedia(motionPreference)
    let neutral: { beta: number, gamma: number, screenAngle: number } | undefined

    function onOrientation({ beta, gamma }: DeviceOrientationEvent) {
      if (motion.matches || document.hidden || drag.current || beta === null || gamma === null) return
      const screenAngle = screen.orientation?.angle ?? 0
      if (neutral?.screenAngle !== screenAngle) neutral = { beta, gamma, screenAngle }

      const radians = screenAngle * Math.PI / 180
      const vertical = beta - neutral.beta
      const horizontal = gamma - neutral.gamma
      setTilt(
        target,
        (vertical * Math.cos(radians) - horizontal * Math.sin(radians)) * 0.55,
        (horizontal * Math.cos(radians) + vertical * Math.sin(radians)) * 0.55,
      )
    }

    function resetOrientation() {
      neutral = undefined
      setTilt(target, 0, 0)
    }

    window.addEventListener('deviceorientation', onOrientation)
    document.addEventListener('visibilitychange', resetOrientation)
    motion.addEventListener('change', resetOrientation)
    return () => {
      window.removeEventListener('deviceorientation', onOrientation)
      document.removeEventListener('visibilitychange', resetOrientation)
      motion.removeEventListener('change', resetOrientation)
      resetOrientation()
    }
  }, [phoneTilt])

  return {
    art,
    didDrag,
    pointerHandlers: {
      onPointerDown: startDrag,
      onPointerMove: moveDrag,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onLostPointerCapture: endDrag,
    },
    phoneTilt,
    togglePhoneTilt,
    supportsPhoneTilt: window.isSecureContext && Boolean(orientation),
  }
}
