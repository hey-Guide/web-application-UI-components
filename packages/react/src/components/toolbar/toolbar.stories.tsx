import type {Meta, StoryObj} from "@storybook/react";

import {
  Bold,
  Copy,
  Italic,
  Redo2,
  Scissors,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Underline,
  Undo2,
} from "lucide-react";
import React from "react";

import {Button} from "../button";
import {ButtonGroup} from "../button-group";
import {Separator} from "../separator";
import {ToggleButton} from "../toggle-button";
import {ToggleButtonGroup} from "../toggle-button-group";

import {Toolbar} from "./index";

const meta: Meta<typeof Toolbar> = {
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/Toolbar",
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: () => (
    <Toolbar aria-label="Text formatting">
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
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
      <Separator />
      <ButtonGroup>
        <Button isIconOnly aria-label="Copy" variant="secondary">
          <Copy />
        </Button>
        <ButtonGroup.Separator />
        <Button isIconOnly aria-label="Cut" variant="secondary">
          <Scissors />
        </Button>
      </ButtonGroup>
    </Toolbar>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Toolbar aria-label="Tools" orientation="vertical">
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
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
      <Separator />
      <ButtonGroup>
        <Button isIconOnly aria-label="Undo" variant="secondary">
          <Undo2 />
        </Button>
        <ButtonGroup.Separator />
        <Button isIconOnly aria-label="Redo" variant="secondary">
          <Redo2 />
        </Button>
      </ButtonGroup>
    </Toolbar>
  ),
};

export const WithButtonGroup: Story = {
  render: () => (
    <Toolbar aria-label="Editor toolbar">
      <ButtonGroup>
        <Button variant="secondary">
          <Undo2 />
          Undo
        </Button>
        <ButtonGroup.Separator />
        <Button variant="secondary">
          <Redo2 />
          Redo
        </Button>
      </ButtonGroup>
      <Separator />
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
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
      <Separator />
      <ButtonGroup>
        <Button isIconOnly aria-label="Align left" variant="secondary">
          <TextAlignStart />
        </Button>
        <ButtonGroup.Separator />
        <Button isIconOnly aria-label="Align center" variant="secondary">
          <TextAlignCenter />
        </Button>
        <ButtonGroup.Separator />
        <Button isIconOnly aria-label="Align right" variant="secondary">
          <TextAlignEnd />
        </Button>
      </ButtonGroup>
    </Toolbar>
  ),
};

export const Attached: Story = {
  render: () => (
    <Toolbar isAttached aria-label="Attached toolbar">
      <ToggleButtonGroup aria-label="Text style" selectionMode="multiple">
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
      <Separator />
      <ButtonGroup>
        <Button isIconOnly aria-label="Copy" variant="secondary">
          <Copy />
        </Button>
        <ButtonGroup.Separator />
        <Button isIconOnly aria-label="Cut" variant="secondary">
          <Scissors />
        </Button>
      </ButtonGroup>
    </Toolbar>
  ),
};
