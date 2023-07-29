import { mergeProps } from '@zag-js/react'
import { type PanelProps } from '@zag-js/splitter'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import type { Assign } from '../types'
import { useSplitterContext } from './splitter-context'

export type SplitterPanelProps = Assign<ComponentPropsWithoutRef<typeof ark.div>, PanelProps>

export const SplitterPanel = forwardRef<HTMLDivElement, SplitterPanelProps>((props, ref) => {
  const [splitterPanelProps, divProps] = createSplitProps<PanelProps>()(props, ['id', 'snapSize'])
  const { getPanelProps } = useSplitterContext()
  const mergedProps = mergeProps(getPanelProps(splitterPanelProps), divProps)

  return <ark.div {...mergedProps} ref={ref} />
})

SplitterPanel.displayName = 'SplitterPanel'
