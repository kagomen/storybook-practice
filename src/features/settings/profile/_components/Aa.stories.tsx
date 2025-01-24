import type { Meta, StoryObj } from '@storybook/react'
import { Aa } from './Aa'

const meta: Meta<typeof Aa> = {
  title: 'Aa',
  component: Aa,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}
export default meta

export const Default: StoryObj<typeof Aa> = {}