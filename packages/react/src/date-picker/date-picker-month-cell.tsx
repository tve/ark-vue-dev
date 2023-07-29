import type { CellProps } from '@zag-js/date-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import type { Assign } from '../types'
import { DatePickerCellProvider } from './date-picker-cell-context'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerMonthCellProps = Assign<ComponentPropsWithoutRef<typeof ark.div>, CellProps>

export const DatePickerMonthCell = forwardRef<HTMLDivElement, DatePickerMonthCellProps>(
  (props, ref) => {
    const { getMonthCellProps } = useDatePickerContext()
    const [cellProps, localProps] = createSplitProps<CellProps>()(props, ['value', 'disabled'])
    const mergedProps = mergeProps(getMonthCellProps(cellProps), localProps)

    return (
      <DatePickerCellProvider value={cellProps}>
        <ark.div {...mergedProps} ref={ref} />
      </DatePickerCellProvider>
    )
  },
)

DatePickerMonthCell.displayName = 'DatePickerMonthCell'
