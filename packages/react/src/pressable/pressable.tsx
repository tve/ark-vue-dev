import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import { type Assign } from '../types'
import { usePressable, type UsePressableProps } from './use-pressable'

export type PressableProps = Assign<ComponentPropsWithoutRef<typeof ark.button>, UsePressableProps>

export const Pressable = forwardRef<HTMLButtonElement, PressableProps>((props, ref) => {
  const [usePressableProps, divProps] = createSplitProps<UsePressableProps>()(props, [
    'allowTextSelectionOnPress',
    'cancelOnPointerExit',
    'dir',
    'disabled',
    'getRootNode',
    'id',
    'longPressDelay',
    'onLongPress',
    'onPress',
    'onPressEnd',
    'onPressStart',
    'onPressUp',
    'preventFocusOnPress',
  ])
  const { pressableProps } = usePressable(usePressableProps)
  const mergedProps = mergeProps(pressableProps, divProps)

  return <ark.button {...mergedProps} ref={ref} />
})

Pressable.displayName = 'Pressable'
