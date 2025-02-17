import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react'
import * as tooltip from '@zag-js/tooltip'
import { useId } from 'react'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { useEvent } from '../use-event'

export interface UseTooltipProps extends Optional<tooltip.Context, 'id'> {}

export interface UseTooltipReturn extends tooltip.Api<PropTypes> {}

export const useTooltip = (props: UseTooltipProps): UseTooltipReturn => {
  const initialContext: tooltip.Context = {
    id: useId(),
    getRootNode: useEnvironmentContext(),
    ...props,
  }

  const context: tooltip.Context = {
    ...initialContext,
    onOpenChange: useEvent(props.onOpenChange, { sync: true }),
  }

  const [state, send] = useMachine(tooltip.machine(initialContext), { context })

  return tooltip.connect(state, send, normalizeProps)
}
