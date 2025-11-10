import { type Placement } from '@floating-ui/dom'
import { defineComponent, ref } from 'vue'

export interface UiFloatingProps {
  placement?: Placement
  trigger?: Trigger
}

type Trigger = 'click' | 'hover'

export const UiFloating = defineComponent((_props: UiFloatingProps) => {
  const _visible = ref(false)

  return () => (
    <div></div>
  )
}, { props: [] })
