import type {Meta} from "@storybook/react";

import {Ellipsis, Globe, LogIn, Mail, Paperclip, Plus, Trash2} from "lucide-react";
import React, {useState} from "react";

import {Spinner} from "../spinner";

import {Button, buttonVariants} from "./index";

export default {
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "outline", "ghost", "danger"],
    },
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  title: "Components/Buttons/Button",
} as Meta<typeof Button>;

const defaultArgs: Button["RootProps"] = {
  size: "md",
};

const Template = ({isDisabled, size}: Button["RootProps"]) => (
  <div className="flex gap-3">
    <Button isDisabled={isDisabled} size={size}>
      Primary
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="secondary">
      Secondary
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="tertiary">
      Tertiary
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="outline">
      Outline
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="ghost">
      Ghost
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="danger">
      Danger
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="danger-soft">
      Danger Soft
    </Button>
  </div>
);

const TemplateWithLinkButton = ({isIconOnly, size, variant}: Button["RootProps"]) => (
  <div className="flex flex-col gap-3">
    <div className="flex gap-3">
      <a
        className={buttonVariants({isIconOnly, size, variant})}
        href="https://www.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Google
      </a>
    </div>
  </div>
);

const TemplateWithIcon = ({isDisabled, size}: Button["RootProps"]) => (
  <div className="flex gap-3">
    <Button isDisabled={isDisabled} size={size}>
      <Globe />
      Search
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="secondary">
      <Plus />
      Add Member
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="tertiary">
      <Mail />
      Email
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="danger">
      <Trash2 />
      Delete
    </Button>
    <Button isDisabled={isDisabled} size={size} variant="danger-soft">
      <Trash2 />
      Cancel
    </Button>
  </div>
);

const TemplateWithIconOnly = ({isDisabled, size, variant}: Button["RootProps"]) => (
  <div className="flex gap-3">
    <Button isIconOnly isDisabled={isDisabled} size={size} variant={variant ?? "tertiary"}>
      <Ellipsis />
    </Button>
  </div>
);

const TemplateWithSpinner = ({size, variant}: Button["RootProps"]) => (
  <div className="flex gap-3">
    <Button isPending size={size} variant={variant}>
      <Spinner color="current" size="sm" />
      Loading
    </Button>
  </div>
);

const TemplateWithLoadingState = ({size, variant}: Button["RootProps"]) => {
  const [isLoading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  };

  return (
    <Button isPending={isLoading} size={size} variant={variant ?? "tertiary"} onPress={handlePress}>
      {({isPending}) => (
        <>
          {isPending ? <Spinner color="current" size="sm" /> : <Paperclip />}
          {isLoading ? "Uploading..." : "Upload File"}
        </>
      )}
    </Button>
  );
};

const SizesTemplate = () => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
    <div className="flex items-center gap-3">
      <Button size="sm" variant="secondary">
        <Plus />
        Small
      </Button>
      <Button size="md" variant="secondary">
        <Plus />
        Medium
      </Button>
      <Button size="lg" variant="secondary">
        <Plus />
        Large
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Button isIconOnly size="sm" variant="tertiary">
        <Ellipsis />
      </Button>
      <Button isIconOnly size="md" variant="tertiary">
        <Ellipsis />
      </Button>
      <Button isIconOnly size="lg" variant="tertiary">
        <Ellipsis />
      </Button>
    </div>
  </div>
);

const TemplateWithSocialButton = ({size, variant}: Button["RootProps"]) => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Button size={size} variant={variant ?? "tertiary"}>
      <LogIn />
      Sign in with Google
    </Button>
    <Button size={size} variant={variant ?? "tertiary"}>
      <LogIn />
      Sign in with GitHub
    </Button>
    <Button size={size} variant={variant ?? "tertiary"}>
      <LogIn />
      Sign in with Apple
    </Button>
    <Button size={size} variant={variant ?? "tertiary"}>
      <LogIn />
      Sign in with LinkedIn
    </Button>
  </div>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const WithLinkButton = {
  args: defaultArgs,
  render: TemplateWithLinkButton,
};

export const Sizes = {
  render: SizesTemplate,
};

export const FullWidth = {
  render: () => (
    <div className="w-[400px] space-y-3">
      <Button fullWidth>Primary</Button>
      <Button fullWidth variant="secondary">
        Secondary
      </Button>
      <Button fullWidth variant="tertiary">
        Tertiary
      </Button>
      <Button fullWidth size="sm">
        Small
      </Button>
      <Button fullWidth size="lg">
        Large
      </Button>
      <Button fullWidth>
        <Plus />
        With Icon
      </Button>
    </div>
  ),
};

export const WithIcon = {
  args: defaultArgs,
  render: TemplateWithIcon,
};

export const WithIconOnly = {
  args: defaultArgs,
  render: TemplateWithIconOnly,
};

export const WithSpinner = {
  args: defaultArgs,
  render: TemplateWithSpinner,
};

export const WithLoadingState = {
  args: defaultArgs,
  render: TemplateWithLoadingState,
};

export const WithSocialButton = {
  args: defaultArgs,
  render: TemplateWithSocialButton,
};
