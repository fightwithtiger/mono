import { r } from '../../../packages/core/index'

export function setupCounter(element: HTMLDivElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(r)
}
