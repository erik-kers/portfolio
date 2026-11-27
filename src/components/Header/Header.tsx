import { useCallback, useEffect, useState, type CSSProperties } from 'react'

const firstName = `▓█████  ██▀███   ██▓ ██ ▄█▀
▓█   ▀ ▓██ ▒ ██▒▓██▒ ██▄█▒
▒███   ▓██ ░▄█ ▒▒██▒▓███▄░
▒▓█  ▄ ▒██▀▀█▄  ░██░▓██ █▄
░▒████▒░██▓ ▒██▒░██░▒██▒ █▄
░░ ▒░ ░░ ▒▓ ░▒▓░░▓  ▒ ▒▒ ▓▒
 ░ ░  ░  ░▒ ░ ▒░ ▒ ░░ ░▒ ▒░
   ░     ░░   ░  ▒ ░░ ░░ ░
   ░  ░   ░      ░  ░  ░`

const lastName = ` ██ ▄█▀▓█████  ██▀███    ██████
 ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒▒██    ▒
▓███▄░ ▒███   ▓██ ░▄█ ▒░ ▓██▄
▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄    ▒   ██▒
▒██▒ █▄░▒████▒░██▓ ▒██▒▒██████▒▒
▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░
░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░░ ░▒  ░ ░
░ ░░ ░    ░     ░░   ░ ░  ░  ░
░  ░      ░  ░   ░           ░`

const logoWords = [firstName.split('\n'), lastName.split('\n')]
const motionPreference = '(prefers-reduced-motion: reduce)'

function randomGlitch() {
  const word = Math.floor(Math.random() * logoWords.length)
  const count = 2 + Math.floor(Math.random() * 3)
  const start = Math.floor(Math.random() * (logoWords[word].length - count + 1))
  const direction = Math.random() < 0.5 ? -1 : 1

  return {
    word,
    start,
    count,
    style: {
      '--glitch-offset': `${direction * (0.35 + Math.random() * 0.5)}em`,
      '--glitch-duration': `${140 + Math.floor(Math.random() * 81)}ms`,
    } as CSSProperties,
  }
}

export default function Header() {
  const [glitch, setGlitch] = useState<(ReturnType<typeof randomGlitch> & { id: number }) | null>(null)

  const playGlitch = useCallback(() => {
    const pattern = randomGlitch()
    setGlitch(previous => ({ ...pattern, id: (previous?.id ?? 0) + 1 }))
  }, [])

  useEffect(() => {
    const motion = window.matchMedia(motionPreference)
    let timer: number | undefined

    function schedule() {
      window.clearTimeout(timer)
      if (document.visibilityState === 'visible' && !motion.matches) {
        timer = window.setTimeout(playGlitch, 18000 + Math.random() * 27000)
      }
    }

    schedule()
    document.addEventListener('visibilitychange', schedule)
    motion.addEventListener('change', schedule)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', schedule)
      motion.removeEventListener('change', schedule)
    }
  }, [glitch, playGlitch])

  return (
    <header className="nfo-header">
      <button
        type="button"
        className="nfo-logo"
        aria-label="Replay logo glitch"
        onClick={() => {
          if (!window.matchMedia(motionPreference).matches) playGlitch()
        }}
      >
        {logoWords.map((rows, wordIndex) => (
          <span key={wordIndex} className="nfo-logo-word" aria-hidden="true">
            {rows.map((row, index) => {
              const active = glitch?.word === wordIndex && index >= glitch.start
                && index < glitch.start + glitch.count

              return (
                <span key={index} className="nfo-logo-row">
                  <span
                    key={active ? glitch.id : 0}
                    className={active ? 'nfo-logo-replay' : undefined}
                    style={active ? glitch.style : undefined}
                  >
                    {row}
                  </span>
                </span>
              )
            })}
          </span>
        ))}
      </button>
      <h1>Erik Kers</h1>
      <p>Frontend developer in Stockholm.</p>
      <p className="mt-3">
        <a className="nfo-link" href="https://github.com/erik-kers">GitHub</a>
        <span aria-hidden="true"> / </span>
        <a className="nfo-link" href="https://www.linkedin.com/in/erik-kers-97993569">LinkedIn</a>
      </p>
    </header>
  )
}
