import { join, dirname } from 'path';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    // getAbsolutePath('@storybook/addon-onboarding'),
    // getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-essentials'),
    '@chromatic-com/storybook'
  ],

  core: {},

  docs: {},

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "../../styles/1-color-vars.scss" as *;`
          },
        },
      },
      plugins: [svgr({ include: '**/*.svg' })],
    });
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;