# Design System — Project Context

> Read this file first when starting a new session on this project.
> It is a high-level briefing — for detailed rules see SKILL.md and the `references/` folder.

---

## What is Design System?

Design System is the AuctionsPlus design system — a React component library that connects Figma designs to production code. It is used by the AuctionsPlus product and engineering teams to build consistent UI across all AuctionsPlus products.

**Stack:** React + Vite + Tailwind v3 (utility classes for layout only — never for colour, typography, or spacing)
**Figma file key:** `TI2QRswI37Xh8W8h5CrypW`

---

## Project Layout

```
design-system/
  src/
    tokens/
      primitives.css      ← raw values — NEVER use in components
      semantics.css       ← semantic aliases — ALWAYS use these
    components/
      actions/            ← Button, IconButton
      display/            ← Tag, Badge, Chip, Avatar, Image, Logo, EmptyState
      inputs/             ← Input, MinMaxInput, SearchBar, Checkbox, Radio, Toggle, DatePicker
      feedback/           ← Message, Toast, Tooltip, ProgressIndicator, ProgressTracker, Announcement
      navigation/         ← Tab, TabbedAccordion, Breadcrumb, Pagination, CommodityNav
      patterns/           ← Header, Footer, LotCard, AgentContactCard, LotDetailHeader, DataTable
    index.css             ← token imports + Tailwind base
    App.jsx               ← living showcase — all components demoed here
  references/
    html-structure.md     ← HTML/flexbox rules — read before every build
    tokens.md             ← complete token reference with values
    components.md         ← component API, Figma node IDs, build status
  CLAUDE.md               ← hard rules (short — read this)
  SKILL.md                ← full workflow, styling rules, token mapping
  CONTEXT.md              ← this file
```

---

## Core Styling Rules

All styling uses **inline styles with CSS variables**. No exceptions.

```jsx
// ✅ CORRECT
<span style={{
  backgroundColor: 'var(--color-brand-primary-subtle)',
  color:           'var(--color-text-grey)',
  fontSize:        'var(--type-size-label-md)',
  padding:         'var(--spacing-0-5) var(--spacing-xs)',
  borderRadius:    'var(--radius-xs)',
}}>

// ❌ WRONG — hardcoded values
<span style={{ backgroundColor: '#E3F2FE', fontSize: '12px' }}>

// ❌ WRONG — Tailwind colour/type/spacing classes
<span className="bg-blue-100 text-sm text-gray-700">
```

Full rules: `references/html-structure.md`

---

## Token System

Two-layer architecture:

1. **`src/tokens/primitives.css`** — raw named values (`--primitive-blue-default: #1971D8`). Never reference in components.
2. **`src/tokens/semantics.css`** — semantic aliases that components use (`--color-brand-primary: var(--primitive-blue-default)`). Always use these.

Full token list with values: `references/tokens.md`

---

## What's Built

All core components are complete. See `references/components.md` for full API and Figma node IDs.

| Category | Components |
|---|---|
| Actions | Button (all variants + sizes, icon support, favourite/card-favourite) |
| Display | Tag (15 variants), Badge, Chip, Avatar, Image, Logo, EmptyState |
| Inputs | Input (10 types), MinMaxInput, SearchBar, Checkbox, Radio, Toggle, DatePicker |
| Feedback | Message, Toast + provider, Tooltip, ProgressIndicator, ProgressTracker, Announcement |
| Navigation | Tab + TabBar, TabbedAccordion, Breadcrumb, Pagination, CommodityNav |
| Patterns | Header + MobileHeader, Footer + MobileFooter, LotCard, AgentContactCard, LotDetailHeader, DataTable |

---

## Workflow for New Components

1. Read `references/html-structure.md`
2. Check `references/components.md` for the Figma node ID
3. Call `get_design_context` (Figma MCP) with the node ID and file key
4. Map Figma variables to CSS variables using `references/tokens.md`
5. Build flat component — inline styles, CSS variables, no Tailwind colour/spacing
6. Write `src/components/[category]/[Name]/[Name].jsx` + `index.js`
7. Add to `App.jsx` showcase
8. Update `references/components.md` — set status ✅, add code path

---

## Figma MCP

The Figma MCP server is configured and active. Primary tool: `get_design_context`.

| Page | Node ID |
|---|---|
| Foundations | `0:1` |
| Components | `4:3877` |
| Patterns | `10:5151` |
| Experiences | `10:4961` |

---

## What to Read Before Doing Anything

| Task | Read |
|---|---|
| Building a new component | `references/html-structure.md` → `references/tokens.md` → `references/components.md` |
| Checking token names | `references/tokens.md` |
| Finding a node ID | `references/components.md` |
| Understanding full rules | `SKILL.md` |
