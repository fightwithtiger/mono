import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="counter">
    vanilla
  </div>
`

setTimeout(() => {
  setupCounter(document.querySelector<HTMLDivElement>('#counter')!)
}, 1000)

