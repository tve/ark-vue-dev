import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { ark } from '../factory'
import { usePinInputContext } from './pin-input-context'

export type PinInputControlProps = ComponentPropsWithoutRef<typeof ark.div>

export const PinInputControl = forwardRef<HTMLDivElement, PinInputControlProps>((props, ref) => {
  const api = usePinInputContext()
  const mergedProps = mergeProps(api.controlProps, props)

  return <ark.div {...mergedProps} ref={ref} />
})

PinInputControl.displayName = 'PinInputControl'
