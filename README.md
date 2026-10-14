# web-application-UI-components

The heyGuide copy of the [HeroUI v3](https://heroui.com/docs/react/getting-started/quick-start) React component library: 80+ accessible components built on [React Aria](https://react-spectrum.adobe.com/react-aria/) and styled with [Tailwind CSS v4](https://tailwindcss.com/).

Because the full source lives here (instead of being installed from npm), we can read, change and theme every component.

## Upstream source

| | |
|---|---|
| Repository | https://github.com/heroui-inc/heroui |
| Branch | `v3` |
| Commit | [`a0190eb`](https://github.com/heroui-inc/heroui/commit/a0190eb142cf9874159d072ae9e2336417d5b04d) (2026-10-13) |
| Package version | `@heroui/react` / `@heroui/styles` 3.2.6 |
| License | Apache-2.0 (see [LICENSE](./LICENSE)); the packages declare MIT |

The first commit in this repository is a verbatim copy of that commit. Anything changed afterwards is visible in the git history.

**Not copied:**

- `apps/docs`: the heroui.com documentation website (Next.js and Fumadocs). Component docs stay available at [heroui.com/docs/react](https://heroui.com/docs/react/components), and every component has stories in Storybook here.
- HeroUI's own organisation setup: the npm release and MCP workflows, `CODEOWNERS`, `FUNDING.yml`, issue and PR templates, `vercel.json`, and the two Claude agents that only write to `apps/docs`.

## Repository layout

```
packages/
├── react/       @heroui/react   – components, hooks and utils (src/components/<name>/)
├── styles/      @heroui/styles  – CSS, themes and tailwind-variants for every component
├── storybook/   @heroui/storybook – Storybook to browse and develop the components
├── testing/     @heroui/testing – shared Vitest (jsdom and Playwright) setup
└── standard/    @heroui/standard – shared ESLint, Prettier and TypeScript config
brand/logos/        heyGuide logos (SVG)
skills/, prompts/   HeroUI's AI-assistant skills and prompts (they read heroui.com)
```

## Requirements

- Node.js 22+ (see `.nvmrc`)
- pnpm 10 (`corepack enable` picks the version from `package.json`)
- Consumers need React 19+ and Tailwind CSS v4

## Development

```bash
pnpm install          # install dependencies and set up git hooks
pnpm dev              # Storybook on http://localhost:6006
pnpm build            # build @heroui/styles and @heroui/react into dist/
pnpm lint             # ESLint
pnpm typecheck        # TypeScript
pnpm format           # Prettier check
pnpm test             # all tests (jsdom and browser)
pnpm test:browser     # Playwright browser tests (run `pnpm --filter @heroui/testing exec playwright install chromium` once)
pnpm test:coverage    # jsdom tests with coverage
pnpm build:storybook  # static Storybook in packages/storybook/storybook-static
```

To scaffold a new component, run `pnpm --filter @heroui/react add:component`.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/). A git hook checks them, and lint-staged formats staged files before each commit. [CONTRIBUTING.md](./CONTRIBUTING.md) and [CLAUDE.md](./CLAUDE.md) (HeroUI's own guides) describe the component conventions in detail.

## Using the components in an app

The packages keep their upstream names (`@heroui/react`, `@heroui/styles`), so code and docs written for HeroUI work unchanged.

```css
/* globals.css – import tailwindcss first */
@import "tailwindcss";
@import "@heroui/styles";
```

```tsx
import {Button} from "@heroui/react";

export function App() {
  return <Button>My Button</Button>;
}
```

To use this copy instead of the npm release, pack it. Inside this repository the packages' `exports` point at `src/`. `pnpm pack` builds tarballs that point at `dist/` instead:

```bash
pnpm build
pnpm --filter @heroui/styles --filter @heroui/react pack --pack-destination ./packs
```

In the app, depend on both tarballs. Add an override so `@heroui/react` also uses the local `@heroui/styles` and doesn't pull a second copy from npm:

```json
{
  "dependencies": {
    "@heroui/react": "file:../web-application-UI-components/packs/heroui-react-3.2.6.tgz",
    "@heroui/styles": "file:../web-application-UI-components/packs/heroui-styles-3.2.6.tgz"
  },
  "pnpm": {
    "overrides": {
      "@heroui/styles": "file:../web-application-UI-components/packs/heroui-styles-3.2.6.tgz"
    }
  }
}
```

To share the packages across projects, publish the tarballs to a private registry. Rename them to our own scope first (for example `@heyguide/react`) so they can't clash with the public `@heroui/*` packages.

## Brand

The heyGuide logos are in [`brand/logos/`](./brand/logos/), as SVGs 390 × 98 px:

| File | Use |
| --- | --- |
| `heyguide-logo-color.svg` | The full-colour logo: "hey!" in brand pink, "Guide" in brand blue |
| `heyguide-logo-mono-blue.svg` | Single colour, brand blue |
| `heyguide-logo-mono-pink.svg` | Single colour, brand pink |

The lettering is white inside the coloured shapes, so the logos work on light and dark backgrounds. Use them as images (`<img src="…/heyguide-logo-color.svg" alt="heyGuide">`); don't recolour or redraw them.

The brand colours are theme variables in `@heroui/styles` (the same in light and dark) and Tailwind colours:

| Variable | Value | Tailwind | Contrast |
| --- | --- | --- | --- |
| `--brand-blue` | `#1c496d` | `bg-brand-blue`, `text-brand-blue` | 9.4:1 with white |
| `--brand-blue-light` | `#c7d4ef` | `bg-brand-blue-light` | brand blue on it 6.3:1 |
| `--brand-pink` | `#e6146d` | `bg-brand-pink`, `text-brand-pink` | 4.48:1 with white, just under AA (4.5:1) for small text |
| `--brand-pink-light` | `#fdebf1` | `bg-brand-pink-light` | brand pink on it 3.9:1, large text only |

The components still use the theme's own roles (`accent`, `danger`, …); the brand colours are for brand surfaces such as headers, marketing blocks and illustrations.

## Updating from upstream

This repository doesn't share git history with HeroUI, so updates are applied as diffs between two upstream commits:

```bash
git clone --branch v3 https://github.com/heroui-inc/heroui ../heroui
cd ../heroui
git diff a0190eb142cf9874159d072ae9e2336417d5b04d <new-commit> \
  -- . ':(exclude)apps/docs' > ../heroui-update.patch
cd ../web-application-UI-components
git apply --3way ../heroui-update.patch
pnpm install && pnpm build && pnpm test
```

Afterwards, update the commit hash in the table above.
