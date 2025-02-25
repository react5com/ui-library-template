import type { Meta, StoryObj } from '@storybook/react';
import { LibComponent } from './LibComponent';

const meta: Meta<typeof LibComponent> = {
  title: 'Example/LibComponent',
  component: LibComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
export default meta;

type Story = StoryObj<typeof LibComponent>;

export const TextLibComponent: Story = {
  render: () => <LibComponent>Test</LibComponent>,
};
