import type { Meta, StoryObj } from "@storybook/react"
import { ServerComponent } from "./ServerComponent"

// import { action } from "@storybook/addon-actions"

const meta: Meta<typeof ServerComponent> = {
  title: "Components/Sample/ServerComponent",
  component: ServerComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // decorators: [
  //   (Story) => (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Story />
  //     </Suspense>
  //   ),
  // ],
}
export default meta

export const Default: StoryObj<typeof ServerComponent> = {}
