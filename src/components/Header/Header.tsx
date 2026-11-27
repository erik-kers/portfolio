import { useState } from 'react'

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

export default function Header() {
  const [glitchCount, setGlitchCount] = useState(0)

  return (
    <header className="nfo-header">
      <button
        type="button"
        className="nfo-logo"
        aria-label="Replay logo glitch"
        onClick={() => setGlitchCount(count => count + 1)}
      >
        {[firstName, lastName].map(word => (
          <span key={word} className="nfo-logo-word" aria-hidden="true">
            {word.split('\n').map((row, index) => (
              <span key={index} className="nfo-logo-row">
                <span key={glitchCount} className={glitchCount > 0 ? 'nfo-logo-replay' : undefined}>
                  {row}
                </span>
              </span>
            ))}
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
