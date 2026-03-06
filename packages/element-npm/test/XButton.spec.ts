import { describe, it } from 'vitest'

import { mount } from '@vue/test-utils'
import { XButton } from '@fpfe/element'

describe('XButton', () => {
  it('render', ({ expect }) => {
    const wrapper = mount(XButton, { slots: { default: 'click me' } })
    expect(wrapper.text()).toContain('click me')
  })
})