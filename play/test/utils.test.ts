import { sum } from '../src/utils'

import { expect, it } from 'vitest'

it('sum', () => {
  expect(sum(1, 2)).equal(3)
})
