import { createContext } from '../context'
import { type UseNumberInputReturn } from './use-number-input'

export interface NumberInputContext extends UseNumberInputReturn {}

export const [NumberInputProvider, useNumberInputContext] =
  createContext<NumberInputContext>('NumberInputContext')
