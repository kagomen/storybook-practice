---
name: "component"
root: "src"
output: "."
questions:
  name: "コンポーネント名を入力してください"
  directory:
    message: "出力先のディレクトリを選択してください"
    choices:
      - "features/settings/profile/_components"
      - "features/settings/gateways/_components"
      - "features/settings/sensors/_components"
---

# `{{ inputs.directory }}/{{ inputs.name | pascal }}.tsx`

```ts
type Props = {}

export const {{ inputs.name | pascal }} = ({}: Props) => {
  return <div></div>
}
```

# `{{ inputs.directory }}/{{ inputs.name | pascal }}.stories.tsx`

```ts
import type { Meta, StoryObj } from '@storybook/react'
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}
export default meta

export const Default: StoryObj<typeof {{ inputs.name | pascal }}> = {}
```
