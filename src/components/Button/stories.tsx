import { Meta, StoryObj } from '@storybook/react/';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;
export const Basic: Story = {
  args: {
    value: 'test',
  },
};
