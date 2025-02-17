import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useTooltipContext } from './tooltip-context'

export interface TooltipPositionerProps extends HTMLArkProps<'div'> {}

export const TooltipPositioner = defineComponent<TooltipPositionerProps>(
  (_, { slots, attrs }) => {
    const api = useTooltipContext()

    return () => (
      <ark.div {...api.value.positionerProps} {...attrs}>
        {slots.default?.()}
      </ark.div>
    )
  },
  {
    name: 'TooltipPositioner',
  },
)
