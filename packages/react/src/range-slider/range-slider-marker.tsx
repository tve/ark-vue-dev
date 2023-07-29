import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { ark } from '../factory'
import type { Assign } from '../types'
import { useRangeSliderContext } from './range-slider-context'

export type RangeSliderMarkerProps = Assign<
  ComponentPropsWithoutRef<typeof ark.span>,
  { value: number }
>

export const RangeSliderMarker = forwardRef<HTMLSpanElement, RangeSliderMarkerProps>(
  (props, ref) => {
    const { value, ...spanProps } = props
    const { getMarkerProps } = useRangeSliderContext()
    const mergedProps = mergeProps(getMarkerProps({ value }), spanProps)

    return <ark.span {...mergedProps} ref={ref} />
  },
)

RangeSliderMarker.displayName = 'RangeSliderMarker'
