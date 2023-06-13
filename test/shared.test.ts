import { expect, it } from 'vitest'
import { add } from '../packages/shared/index'

it('shared add', () => {
  const result = add({ a: 10, b: 1})
  expect(result).toEqual(11)
})