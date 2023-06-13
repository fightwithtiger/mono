export interface Params {
  a: number
  b: number
}

export function add({a, b}: Params) {
  return a + b
}