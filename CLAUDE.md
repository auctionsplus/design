# Design System — AuctionsPlus Design System

React + Vite + Tailwind v3. Figma file key: `TI2QRswI37Xh8W8h5CrypW`

## Always read before building

| File | When |
|---|---|
| `references/html-structure.md` | Every time — read first |
| `references/tokens.md` | When wiring tokens or checking variable names |
| `references/components.md` | For node IDs and current build status |

Full workflow, styling rules, and token mapping: **`SKILL.md`**

## Hard rules

- **Inline styles + CSS variables only** — no Tailwind colour/type/spacing classes, no hardcoded hex or px values
- **Flat HTML** — collapse Figma-generated nesting to the minimum elements needed
- **Semantic tokens only** — `src/tokens/semantics.css`, never primitives
- **Get Figma design context** (`get_design_context`) before building any component — use node IDs from `references/components.md`
- **Update `references/components.md`** after building — set status ✅ and add code path
