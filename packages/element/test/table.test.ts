import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'

const userData = [
  { name: 'xx', age: 18 },
  { name: 'yy', age: 19 },
  { name: 'zz', age: 20 }
]

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

describe('Table', () => {
  it('basic render', async () => {
    const wrapper = mount(MessageComponent, {
      props: { msg: 'xx' }
    })
    expect(wrapper.text()).toContain('xx')
  })
})