## 概要

Next.js、shadcn/ui（Tailwind CSS） という構成で Storybook を使ってみる

ref: https://zenn.dev/masatotezuka/articles/strorybook_nextjs_beginner

## install/setup

### shadcn/ui

ref:

- https://ui.shadcn.com/docs/installation/next
- https://ui.shadcn.com/docs/react-19

```
npx shadcn@latest init -d
```

CLI で問われたら`--legacy-peer-deps`を選択する

```
npx shadcn@latest add button
```

### Storybook

#### install

ref: https://storybook.js.org/docs/get-started/frameworks/nextjs

```
npx storybook@latest init
```

#### 競合が発生する場合の対応策

```
npm config set legacy-peer-deps true --location project
npm storybook@latest init
```

#### setup

```ts
// ref: https://storybook.js.org/docs/get-started/frameworks/nextjs#set-nextjsappdirectory-to-true

// .storybook/preview.ts

const preview: Preview = {
  // ...
  parameters: {
    // ...
    nextjs: {
      appDirectory: true,
    },
  },
}
```

```ts
// ref: https://storybook.js.org/docs/get-started/frameworks/nextjs#react-server-components-rsc

// .storybook/main.ts

const config: StorybookConfig = {
  // ...
  features: {
    experimentalRSC: true,
  },
}
```

#### for Tailwind

ref: https://storybook.js.org/recipes/tailwindcss#2-provide-tailwind-to-stories

```ts
// .storybook/preview.js

import "../src/app/globals.css"
```

```ts
// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'], // 追加箇所
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
npx storybook@latest add @storybook/addon-themes
```

data-attributes を選択したら型エラーが発生したので、今回は class を選択
