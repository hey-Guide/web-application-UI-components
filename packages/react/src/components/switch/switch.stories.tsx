import type {Meta, StoryObj} from "@storybook/react";

import {Bell, BellOff, Check, Mic, MicOff, Moon, Power, Sun, Volume2, VolumeX} from "lucide-react";
import React from "react";

import {Description} from "../description";
import {FieldError} from "../field-error";

import {Switch} from "./index";

export default {
  argTypes: {},
  component: Switch,
  parameters: {
    layout: "centered",
  },
  title: "Components/Controls/Switch",
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <Switch>
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Enable notifications
      </Switch.Content>
    </Switch>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch isDisabled>
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Enable notifications
      </Switch.Content>
    </Switch>
  ),
};

export const DefaultSelected: Story = {
  render: () => (
    <Switch defaultSelected>
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Enable notifications
      </Switch.Content>
    </Switch>
  ),
};

export const DisabledDefaultSelected: Story = {
  render: () => (
    <Switch defaultSelected isDisabled aria-label="Enable notifications">
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Content>
    </Switch>
  ),
};

export const Controlled: Story = {
  render: function ControlledSwitch() {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Switch isSelected={isSelected} onChange={setIsSelected}>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            Enable notifications
          </Switch.Content>
        </Switch>
        <p className="text-sm text-muted">Switch is {isSelected ? "on" : "off"}</p>
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => (
    <Switch aria-label="Enable notifications">
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Content>
    </Switch>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Switch isInvalid isRequired name="notifications">
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Enable notifications
      </Switch.Content>
      <FieldError>You must enable notifications to continue</FieldError>
    </Switch>
  ),
};

export const Validation: Story = {
  render: () => (
    <Switch
      isRequired
      name="terms-switch"
      validate={(isSelected) => (isSelected ? true : "You must accept to continue")}
    >
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Accept terms
      </Switch.Content>
      <FieldError />
    </Switch>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6">
      <Switch size="sm">
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          Small
        </Switch.Content>
      </Switch>
      <Switch size="md">
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          Medium
        </Switch.Content>
      </Switch>
      <Switch size="lg">
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          Large
        </Switch.Content>
      </Switch>
    </div>
  ),
};

export const LabelBefore: Story = {
  render: () => (
    <Switch>
      <Switch.Content>
        Enable notifications
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Content>
    </Switch>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="max-w-sm">
      <Switch>
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          Public profile
        </Switch.Content>
        <Description>Allow others to see your profile information</Description>
      </Switch>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <Switch aria-label="Power">
      {({isSelected}) => (
        <Switch.Content>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Check className={`size-4 ${isSelected ? "text-cyan-600" : "text-blue-600"}`} />
                ) : (
                  <Power className={`size-4 ${isSelected ? "text-cyan-600" : "text-blue-600"}`} />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </Switch.Content>
      )}
    </Switch>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const icons = {
      check: {
        off: Power,
        on: Check,
        selectedControlClass: "bg-green-500",
        selectedIconClass: "text-green-600",
      },
      darkMode: {
        off: Moon,
        on: Sun,
        selectedControlClass: "",
        selectedIconClass: "",
      },
      lock: {
        off: Volume2,
        on: VolumeX,
        selectedControlClass: "bg-blue-500",
        selectedIconClass: "text-blue-600",
      },
      microphone: {
        off: Mic,
        on: MicOff,
        selectedControlClass: "bg-red-500",
        selectedIconClass: "text-red-600",
      },
      notification: {
        off: BellOff,
        on: Bell,
        selectedControlClass: "bg-purple-500",
        selectedIconClass: "text-purple-600",
      },
    };

    return (
      <div className="flex gap-3">
        {Object.entries(icons).map(([key, value]) => (
          <Switch key={key} defaultSelected aria-label={key} size="lg">
            {({isSelected}) => (
              <Switch.Content>
                <Switch.Control className={isSelected ? value.selectedControlClass : ""}>
                  <Switch.Thumb>
                    <Switch.Icon>
                      {isSelected ? (
                        <value.on
                          className={`opacity-100 ${value.selectedIconClass} size-3 text-inherit`}
                        />
                      ) : (
                        <value.off className="size-3 text-inherit opacity-70" />
                      )}
                    </Switch.Icon>
                  </Switch.Thumb>
                </Switch.Control>
              </Switch.Content>
            )}
          </Switch>
        ))}
      </div>
    );
  },
};

export const RenderProps: Story = {
  render: () => (
    <Switch>
      {({isSelected}) => (
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          {isSelected ? "Enabled" : "Disabled"}
        </Switch.Content>
      )}
    </Switch>
  ),
};
