const ascii = `
      ▄████████    ▄████████  ▄█     ▄█   ▄█▄ 
      ███    ███   ███    ███ ███    ███ ▄███▀ 
      ███    █▀    ███    ███ ███▌   ███▐██▀   
     ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌ ▄▄█████▀    
    ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌ ▀▀█████▄    
      ███    █▄  ▀███████████ ███    ███▐██▄   
      ███    ███   ███    ███ ███    ███ ▀███▄ 
      ██████████   ██     ██  █▀     ███   ▀█▀ 
          █         ███   █▀         █▀     █
   ▄█ █  ▄█▄    ▄████████ █ ▄████████    ▄████████ 
   ███ ▄███▀   ███    ███ █ ███    ███   ███    ███ 
   ███▐██▀     ███    █▀    ███    ███   ███    █▀  
  ▄█████▀     ▄███▄▄▄     █▄███▄▄▄▄██▀   ███        
 ▀▀█████▄    ▀▀███▀▀▀ █   ▀▀███▀▀▀▀▀     ▀█████████▀
   ███▐██▄     ███    █▄  ▀███████████          ███ 
   ███ ▀███▄   ███    ███   ███    ███    ▄█    ███ 
   ███   ▀█▀   ██████████   ███    ███  ▄████████▀  
   █▀                       █▀     █▀      █████     
   █                        █      █         ██
   █                        █      ▀          ▀
   ▀
`
export default function Header() {
  return (
    <header className="nfo-header">
      <pre aria-hidden="true">{ascii}</pre>
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
