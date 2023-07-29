import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { ark } from '../factory'
import { usePinInputContext } from './pin-input-context'

export type PinInputControlProps = ComponentPropsWithoutRef<typeof ark.div>

export const PinInputControl = forwardRef<HTMLDivElement, PinInputControlProps>((props, ref) => {
  const { controlProps, hiddenInputProps } = usePinInputContext()
  const mergedProps = mergeProps(controlProps, props)

  return (
    <ark.div {...mergedProps} ref={ref}>
      <input {...hiddenInputProps} />
      {props.children}
    </ark.div>
  )
})

PinInputControl.displayName = 'PinInputControl'
