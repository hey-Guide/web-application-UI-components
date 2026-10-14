import type {Key} from "../rac";
import type {Meta, StoryObj} from "@storybook/react";

import {
  Bold,
  Columns3,
  Italic,
  LayoutGrid,
  List,
  Strikethrough,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Underline,
} from "lucide-react";
import React, {useState} from "react";

import {ToggleButton} from "../toggle-button";

import {ToggleButtonGroup} from "./";

const meta: Meta<typeof ToggleButtonGroup> = {
  argTypes: {
    fullWidth: {
      control: "boolean",
    },
    isDetached: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    selectionMode: {
      control: "select",
      options: ["single", "multiple"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Buttons/ToggleButtonGroup",
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
  render: () => (
    <ToggleButtonGroup selectionMode="multiple">
      <ToggleButton isIconOnly aria-label="Bold" id="bold">
        <Bold />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id="italic">
        <ToggleButtonGroup.Separator />
        <Italic />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id="underline">
        <ToggleButtonGroup.Separator />
        <Underline />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
        <ToggleButtonGroup.Separator />
        <Strikethrough />
      </ToggleButton>
    </ToggleButtonGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Small</p>
        <ToggleButtonGroup selectionMode="multiple" size="sm">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Medium (default)</p>
        <ToggleButtonGroup selectionMode="multiple" size="md">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Large</p>
        <ToggleButtonGroup selectionMode="multiple" size="lg">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  ),
};

export const Orientation: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Horizontal</p>
        <ToggleButtonGroup orientation="horizontal" selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Vertical</p>
        <ToggleButtonGroup orientation="vertical" selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  ),
};

export const AttachedVsDetached: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Attached (default)</p>
        <ToggleButtonGroup selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Detached</p>
        <ToggleButtonGroup isDetached selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-[400px] space-y-3">
      <ToggleButtonGroup fullWidth selectionMode="multiple">
        <ToggleButton isIconOnly aria-label="Bold" id="bold">
          <Bold />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Italic" id="italic">
          <ToggleButtonGroup.Separator />
          <Italic />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Underline" id="underline">
          <ToggleButtonGroup.Separator />
          <Underline />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
          <ToggleButtonGroup.Separator />
          <Strikethrough />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup fullWidth selectionMode="single">
        <ToggleButton id="left">
          <TextAlignStart />
          Left
        </ToggleButton>
        <ToggleButton id="center">
          <ToggleButtonGroup.Separator />
          <TextAlignCenter />
          Center
        </ToggleButton>
        <ToggleButton id="right">
          <ToggleButtonGroup.Separator />
          <TextAlignEnd />
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  ),
};

export const SelectionMode: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Single selection</p>
        <ToggleButtonGroup defaultSelectedKeys={["center"]} selectionMode="single">
          <ToggleButton id="left">
            <TextAlignStart />
            Left
          </ToggleButton>
          <ToggleButton id="center">
            <ToggleButtonGroup.Separator />
            <TextAlignCenter />
            Center
          </ToggleButton>
          <ToggleButton id="right">
            <ToggleButtonGroup.Separator />
            <TextAlignEnd />
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Multiple selection</p>
        <ToggleButtonGroup defaultSelectedKeys={["bold", "underline"]} selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [selectedKeys, setSelectedKeys] = useState(new Set<Key>(["bold"]));

    return (
      <div className="flex flex-col gap-4">
        <ToggleButtonGroup
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          onSelectionChange={setSelectedKeys}
        >
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
        <p className="text-sm text-muted">
          Selected:{" "}
          <span className="font-medium">
            {selectedKeys.size > 0 ? [...selectedKeys].join(", ") : "None"}
          </span>
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">All buttons disabled</p>
        <ToggleButtonGroup isDisabled selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted">Individual button disabled</p>
        <ToggleButtonGroup selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isDisabled isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  ),
};

export const WithoutSeparator: Story = {
  render: () => (
    <ToggleButtonGroup selectionMode="multiple">
      <ToggleButton isIconOnly aria-label="Bold" id="bold">
        <Bold />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id="italic">
        <Italic />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id="underline">
        <Underline />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
        <Strikethrough />
      </ToggleButton>
    </ToggleButtonGroup>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ToggleButtonGroup defaultSelectedKeys={["italic"]} selectionMode="multiple">
        <ToggleButton id="bold">
          <Bold />
          Bold
        </ToggleButton>
        <ToggleButton id="italic">
          <ToggleButtonGroup.Separator />
          <Italic />
          Italic
        </ToggleButton>
        <ToggleButton id="underline">
          <ToggleButtonGroup.Separator />
          <Underline />
          Underline
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  ),
};

export const Examples: Story = {
  render: function ExamplesStory() {
    const [alignment, setAlignment] = useState(new Set<Key>(["left"]));
    const [formatting, setFormatting] = useState(new Set<Key>(["bold", "underline"]));

    return (
      <div className="flex flex-col items-start gap-8">
        {/* Text formatting toolbar */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted">Text formatting toolbar</p>
          <div className="flex gap-2">
            <ToggleButtonGroup
              selectedKeys={formatting}
              selectionMode="multiple"
              onSelectionChange={setFormatting}
            >
              <ToggleButton isIconOnly aria-label="Bold" id="bold">
                <Bold />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Italic" id="italic">
                <ToggleButtonGroup.Separator />
                <Italic />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Underline" id="underline">
                <ToggleButtonGroup.Separator />
                <Underline />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
                <ToggleButtonGroup.Separator />
                <Strikethrough />
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              disallowEmptySelection
              selectedKeys={alignment}
              selectionMode="single"
              onSelectionChange={setAlignment}
            >
              <ToggleButton isIconOnly aria-label="Align left" id="left">
                <TextAlignStart />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Align center" id="center">
                <ToggleButtonGroup.Separator />
                <TextAlignCenter />
              </ToggleButton>
              <ToggleButton isIconOnly aria-label="Align right" id="right">
                <ToggleButtonGroup.Separator />
                <TextAlignEnd />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        {/* View mode switcher */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted">View mode switcher</p>
          <ToggleButtonGroup
            disallowEmptySelection
            defaultSelectedKeys={["grid"]}
            selectionMode="single"
            size="sm"
          >
            <ToggleButton isIconOnly aria-label="Grid view" id="grid">
              <LayoutGrid />
            </ToggleButton>
            <ToggleButton isIconOnly aria-label="List view" id="list">
              <ToggleButtonGroup.Separator />
              <List />
            </ToggleButton>
            <ToggleButton isIconOnly aria-label="Columns view" id="columns">
              <ToggleButtonGroup.Separator />
              <Columns3 />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* Vertical toolbar */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted">Vertical toolbar</p>
          <ToggleButtonGroup orientation="vertical" selectionMode="multiple">
            <ToggleButton isIconOnly aria-label="Bold" id="bold">
              <Bold />
            </ToggleButton>
            <ToggleButton isIconOnly aria-label="Italic" id="italic">
              <ToggleButtonGroup.Separator />
              <Italic />
            </ToggleButton>
            <ToggleButton isIconOnly aria-label="Underline" id="underline">
              <ToggleButtonGroup.Separator />
              <Underline />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
};
