import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

const MessageComponent = {
  props: ['msg'],
  template: '<p>{{ msg }}</p>'
}

describe('Table', () => {
  it('basic render', () => {
    const wrapper = mount(MessageComponent, { props: { msg: 'xx' }})
    expect(wrapper.text()).toContain('xx')
  })
})
