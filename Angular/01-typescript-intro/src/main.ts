import './style.css'
import './topics/01-basic-types.ts'
import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola mundo!`




console.log('Hola mundo!')
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
