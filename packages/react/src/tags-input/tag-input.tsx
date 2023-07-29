import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import { type Assign } from '../types'
import { useTagsInputContext } from './tags-input-context'

// TODO export in Zag.js
type _TagProps = {
  index: string | number
  value: string
  disabled?: boolean
}

export type TagInputProps = Assign<ComponentPropsWithoutRef<typeof ark.input>, _TagProps>

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>((props, ref) => {
  const [tagProps, inputProps] = createSplitProps<_TagProps>()(props, [
    'index',
    'disabled',
    'value',
  ])
  const { getTagInputProps } = useTagsInputContext()
  const mergedProps = mergeProps(getTagInputProps(tagProps), inputProps)

  return <ark.input {...mergedProps} ref={ref} />
})

TagInput.displayName = 'TagInput'
