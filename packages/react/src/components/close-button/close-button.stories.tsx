import type {CloseButtonProps} from "./index";
import type {Meta} from "@storybook/react";

import {CircleX} from "lucide-react";
import React, {useState} from "react";

import {CloseButton} from "./index";

export default {
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["default"],
    },
  },
  component: CloseButton,
  parameters: {
    layout: "centered",
  },
  title: "Components/Buttons/CloseButton",
} as Meta<typeof CloseButton>;

const defaultArgs: CloseButtonProps = {
  isDisabled: false,
  variant: "default",
};

const Template = (args: CloseButtonProps) => (
  <div className="flex gap-3">
    <CloseButton {...args} />
  </div>
);

const TemplateWithCustomIcon = (args: CloseButtonProps) => (
  <div className="flex gap-3">
    <CloseButton {...args}>
      <CircleX />
    </CloseButton>
  </div>
);

const InteractiveTemplate = (args: CloseButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <CloseButton
        {...args}
        aria-label={`Close (clicked ${count} times)`}
        onPress={() => setCount(count + 1)}
      />

      <span className="text-sm">Clicked: {count} times</span>
    </div>
  );
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const WithCustomIcon = {
  args: defaultArgs,
  render: TemplateWithCustomIcon,
};

export const Interactive = {
  args: defaultArgs,
  render: InteractiveTemplate,
};
