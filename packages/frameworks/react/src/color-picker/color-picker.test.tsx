import { colorPickerAnatomy } from '@ark-ui/anatomy'
import { render } from '@testing-library/react'
import { getExports, getParts } from '../setup-test'
import { ColorPicker } from './'
import { Basic as ComponentUnderTest } from './color-picker.stories'

describe('ColorPicker', () => {
  it.each(getParts(colorPickerAnatomy))('should render part %s', async (part) => {
    render(<ComponentUnderTest />)
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(colorPickerAnatomy))('should export %s', async (part) => {
    expect(ColorPicker[part]).toBeDefined()
  })
})
