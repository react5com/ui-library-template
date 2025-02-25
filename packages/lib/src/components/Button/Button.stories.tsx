import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
export default meta;

type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  render: () => <Button>Test</Button>,
};
