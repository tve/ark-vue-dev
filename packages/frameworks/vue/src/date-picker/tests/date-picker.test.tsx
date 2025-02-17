import { datePickerAnatomy } from '@ark-ui/anatomy'
import { render } from '@testing-library/vue'
import { DatePicker } from '../'
import { getExports, getParts } from '../../setup-test'
import ComponentUnderTest from './date-picker.test.vue'

describe('Date Picker', () => {
  it.each(getParts(datePickerAnatomy))('should render part %s', async (part) => {
    render(ComponentUnderTest)
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(datePickerAnatomy))('should export %s', async (part) => {
    expect(DatePicker[part]).toBeDefined()
  })
})
