import type {LucideProps} from "lucide-react";

import {
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  Info,
  Minus,
  Plus,
  Search,
  TriangleAlert,
  X,
} from "lucide-react";

/**
 * Built-in icons, drawn from the Lucide icon set (https://lucide.dev).
 * Each keeps its HeroUI export name and renders a decorative 16px Lucide icon in `currentColor`;
 * pass any Lucide prop (`size`, `strokeWidth`, `className`, …) to override.
 */
type IconProps = LucideProps;

const decorative = {"aria-hidden": true, role: "presentation"} as const;

export const IconChevronDown = (props: IconProps) => (
  <ChevronDown {...decorative} size={16} {...props} />
);

export const IconChevronUp = (props: IconProps) => (
  <ChevronUp {...decorative} size={16} {...props} />
);

export const IconChevronLeft = (props: IconProps) => (
  <ChevronLeft {...decorative} size={16} {...props} />
);

export const IconChevronRight = (props: IconProps) => (
  <ChevronRight {...decorative} size={16} {...props} />
);

export const ExternalLinkIcon = (props: IconProps) => (
  <ArrowUpRight {...decorative} size={10} strokeWidth={3} {...props} />
);

export const CircleDashedIcon = (props: IconProps) => (
  <CircleDashed {...decorative} size={16} {...props} />
);

export const CloseIcon = (props: IconProps) => <X {...decorative} size={16} {...props} />;

export const InfoIcon = (props: IconProps) => <Info {...decorative} size={16} {...props} />;

export const WarningIcon = (props: IconProps) => (
  <TriangleAlert {...decorative} size={16} {...props} />
);

export const DangerIcon = (props: IconProps) => (
  <CircleAlert {...decorative} size={16} {...props} />
);

export const SuccessIcon = (props: IconProps) => (
  <CircleCheck {...decorative} size={16} {...props} />
);

export const IconMinus = (props: IconProps) => <Minus {...decorative} size={16} {...props} />;

export const IconPlus = (props: IconProps) => <Plus {...decorative} size={16} {...props} />;

export const IconSearch = (props: IconProps) => <Search {...decorative} size={16} {...props} />;

export const IconCalendar = (props: IconProps) => (
  <Calendar {...decorative} size="1em" {...props} />
);
