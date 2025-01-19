import type { Meta, StoryObj } from "@storybook/react"
import { SampleButton } from "./SampleButton"

// import { action } from "@storybook/addon-actions"

const meta: Meta<typeof SampleButton> = {
  title: "Components/Sample/SampleButton",
  component: SampleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      navigation: {
        pathname: "/sample1",
        // query: {
        //   id: "1",
        // },
      },
    },
  },
  argTypes: {
    // onClick: { action: "clicked" },
    variant: {
      control: "select",
      description: "The variant of the button",
      options: ["default", "outline", "destructive", "secondary", "ghost"],
    },
    size: {
      control: "select",
      description: "The size of the button",
      options: ["sm", "default", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
      description: "If the button is disabled",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
    className: {
      control: "text",
      description: "Custom tailwind CSS classes to apply to the button",
    },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    // onClick: action("default click"),
    children: "Default Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    // onClick: action("outline click"),
    children: "Outline Button",
  },
}
