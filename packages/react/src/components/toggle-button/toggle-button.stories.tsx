import type {Meta} from "@storybook/react";

import {Bookmark, Heart, Pin} from "lucide-react";
import React, {useState} from "react";

import {ToggleButton} from "./index";

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
      options: ["default", "ghost"],
    },
  },
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  title: "Components/Buttons/ToggleButton",
} as Meta<typeof ToggleButton>;

const defaultArgs: ToggleButton["RootProps"] = {
  size: "md",
};

const Template = ({isDisabled, size, variant}: ToggleButton["RootProps"]) => (
  <div className="flex gap-3">
    <ToggleButton isDisabled={isDisabled} size={size} variant={variant}>
      <Heart />
      Like
    </ToggleButton>
    <ToggleButton isDisabled={isDisabled} size={size} variant={variant ?? "ghost"}>
      <Heart />
      Like
    </ToggleButton>
  </div>
);

const VariantsTemplate = ({isDisabled, size}: ToggleButton["RootProps"]) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">Default</p>
      <div className="flex gap-3">
        <ToggleButton isDisabled={isDisabled} size={size}>
          <Heart />
          Like
        </ToggleButton>
        <ToggleButton defaultSelected isDisabled={isDisabled} size={size}>
          <Heart fill="currentColor" />
          Like
        </ToggleButton>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">Ghost</p>
      <div className="flex gap-3">
        <ToggleButton isDisabled={isDisabled} size={size} variant="ghost">
          <Heart />
          Like
        </ToggleButton>
        <ToggleButton defaultSelected isDisabled={isDisabled} size={size} variant="ghost">
          <Heart fill="currentColor" />
          Like
        </ToggleButton>
      </div>
    </div>
  </div>
);

const SizesTemplate = () => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-3">
      <ToggleButton size="sm">
        <Heart />
        Small
      </ToggleButton>
      <ToggleButton size="md">
        <Heart />
        Medium
      </ToggleButton>
      <ToggleButton size="lg">
        <Heart />
        Large
      </ToggleButton>
    </div>
    <div className="flex items-center gap-3">
      <ToggleButton isIconOnly size="sm">
        <Heart />
      </ToggleButton>
      <ToggleButton isIconOnly size="md">
        <Heart />
      </ToggleButton>
      <ToggleButton isIconOnly size="lg">
        <Heart />
      </ToggleButton>
    </div>
  </div>
);

const IconOnlyTemplate = ({isDisabled, size, variant}: ToggleButton["RootProps"]) => (
  <div className="flex gap-3">
    <ToggleButton isIconOnly isDisabled={isDisabled} size={size} variant={variant}>
      <Heart />
    </ToggleButton>
    <ToggleButton isIconOnly isDisabled={isDisabled} size={size} variant={variant ?? "ghost"}>
      <Bookmark />
    </ToggleButton>
  </div>
);

const ControlledTemplate = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <ToggleButton isSelected={isSelected} onChange={setIsSelected}>
          {({isSelected: selected}) => (
            <>
              {selected ? <Heart fill="currentColor" /> : <Heart />}
              {selected ? "Liked" : "Like"}
            </>
          )}
        </ToggleButton>
      </div>
      <p className="text-sm text-muted">
        Status: <span className="font-medium">{isSelected ? "Selected" : "Not selected"}</span>
      </p>
    </div>
  );
};

const DisabledTemplate = () => (
  <div className="flex gap-3">
    <ToggleButton isDisabled>
      <Heart />
      Like
    </ToggleButton>
    <ToggleButton defaultSelected isDisabled>
      <Heart fill="currentColor" />
      Like
    </ToggleButton>
  </div>
);

const RealWorldTemplate = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [pinned, setPinned] = useState(true);

  return (
    <div className="flex items-center gap-2">
      <ToggleButton isSelected={liked} size="sm" onChange={setLiked}>
        {({isSelected}) => (
          <>
            {isSelected ? <Heart fill="currentColor" /> : <Heart />}
            Like
          </>
        )}
      </ToggleButton>
      <ToggleButton isSelected={bookmarked} size="sm" variant="ghost" onChange={setBookmarked}>
        {({isSelected}) => (
          <>
            {isSelected ? <Bookmark fill="currentColor" /> : <Bookmark />}
            Save
          </>
        )}
      </ToggleButton>
      <ToggleButton isIconOnly isSelected={pinned} size="sm" variant="ghost" onChange={setPinned}>
        {({isSelected}) => (isSelected ? <Pin fill="currentColor" /> : <Pin />)}
      </ToggleButton>
    </div>
  );
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Variants = {
  args: defaultArgs,
  render: VariantsTemplate,
};

export const Sizes = {
  render: SizesTemplate,
};

export const IconOnly = {
  args: defaultArgs,
  render: IconOnlyTemplate,
};

export const Controlled = {
  render: ControlledTemplate,
};

export const Disabled = {
  render: DisabledTemplate,
};

export const RealWorld = {
  render: RealWorldTemplate,
};
