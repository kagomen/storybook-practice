import type { Meta, StoryObj } from "@storybook/react"
import { ClientComponent } from "./ClientComponent"

const meta: Meta<typeof ClientComponent> = {
  component: ClientComponent,
  title: "Components/Sample/ClientComponent",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta

export const Default: StoryObj<typeof ClientComponent> = {}
