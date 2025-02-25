/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;