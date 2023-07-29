import type { SlideIndicatorProps } from '@zag-js/carousel'
import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import type { Assign } from '../types'
import { useCarouselContext } from './carousel-context'

export type CarouselIndicatorProps = Assign<
  ComponentPropsWithoutRef<typeof ark.button>,
  SlideIndicatorProps
>

export const CarouselIndicator = forwardRef<HTMLButtonElement, CarouselIndicatorProps>(
  (props, ref) => {
    const [indicatorProps, buttonProps] = createSplitProps<SlideIndicatorProps>()(props, [
      'readOnly',
      'index',
    ])

    const { getIndicatorProps } = useCarouselContext()
    const mergedProps = mergeProps(getIndicatorProps(indicatorProps), buttonProps)

    return <ark.button {...mergedProps} ref={ref} />
  },
)

CarouselIndicator.displayName = 'CarouselIndicator'
