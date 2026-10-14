"use client";

import type {DOMRenderProps} from "../../utils/dom";
import type {ListBoxItemVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";
import type {ListBoxItemRenderProps} from "react-aria-components/ListBox";

import {listboxItemVariants} from "@heroui/styles";
import React, {createContext, use} from "react";
import {ListBoxItem as ListBoxItemPrimitive} from "react-aria-components/ListBox";

import {composeSlotClassName, composeTwRenderProps} from "../../utils";
import {dom} from "../../utils/dom";

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Context
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemContext {
  slots?: ReturnType<typeof listboxItemVariants>;
  state?: ListBoxItemRenderProps;
}

const ListBoxItemContext = createContext<ListBoxItemContext>({});

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Root
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemRootProps
  extends ComponentPropsWithRef<typeof ListBoxItemPrimitive>, ListBoxItemVariants {
  className?: string;
}

const ListBoxItemRoot = ({children, className, variant, ...props}: ListBoxItemRootProps) => {
  const slots = React.useMemo(() => listboxItemVariants({variant}), [variant]);

  return (
    <ListBoxItemPrimitive
      className={composeTwRenderProps(className, slots.item())}
      data-slot="list-box-item"
      {...props}
    >
      {(values) => (
        <ListBoxItemContext value={{slots, state: values}}>
          {typeof children === "function" ? children(values) : children}
        </ListBoxItemContext>
      )}
    </ListBoxItemPrimitive>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Indicator
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemIndicatorProps<
  E extends keyof React.JSX.IntrinsicElements = "span",
> extends DOMRenderProps<E, undefined> {
  children?: React.ReactNode | ((props: ListBoxItemRenderProps) => React.ReactNode);
  className?: string;
}

const ListBoxItemIndicator = <E extends keyof React.JSX.IntrinsicElements = "span">({
  children,
  className,
  ...props
}: ListBoxItemIndicatorProps<E> &
  Omit<React.JSX.IntrinsicElements[E], keyof ListBoxItemIndicatorProps<E>>) => {
  const {slots, state} = use(ListBoxItemContext);
  const isSelected = state?.isSelected;

  const content =
    typeof children === "function" ? (
      children(state ?? ({} as ListBoxItemRenderProps))
    ) : children ? (
      children
    ) : (
      <svg
        aria-hidden="true"
        data-slot="list-box-item-indicator--checkmark"
        fill="none"
        role="presentation"
        stroke="currentColor"
        strokeDasharray={23}
        strokeDashoffset={isSelected ? 46 : 69}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        {/* Lucide `check`, drawn left to right for the draw-on animation */}
        <path d="M4 12l5 5L20 6" />
      </svg>
    );

  return (
    <dom.span
      aria-hidden="true"
      className={composeSlotClassName(slots?.indicator, className)}
      data-slot="list-box-item-indicator"
      data-visible={isSelected || undefined}
      {...(props as any)}
    >
      {content}
    </dom.span>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ListBoxItemRoot, ListBoxItemIndicator};

export type {ListBoxItemRootProps, ListBoxItemIndicatorProps};
