import "../src/app/globals.css"

import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"
// import { withThemeByDataAttribute } from "@storybook/addon-themes"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  // decorators: [
  //   withThemeByDataAttribute({
  //     themes: {
  //       // nameOfTheme: 'dataAttributeForTheme',
  //       light: "",
  //       dark: "dark",
  //     },
  //     defaultTheme: "light",
  //     dataAttribute: "data-theme",
  //   }),
  // ],
}

export default preview
