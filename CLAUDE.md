# Design System — AuctionsPlus Design System

React + Vite + Tailwind v3. Figma file key: `TI2QRswI37Xh8W8h5CrypW`

## Always read before building — no exceptions

Before building any component, pattern, shell, screen, or experience — read all three reference files first. This applies to every piece of work, including vibe coding, prototyping, and quick fixes.

| File | What it governs |
|---|---|
| `references/html-structure.md` | HTML structure, flexbox rules, nesting rules |
| `references/tokens.md` | Every token name and value — never guess a token |
| `references/components.md` | What already exists — always reuse before rebuilding |

Full workflow, styling rules, and token mapping: **`SKILL.md`**

## Hard rules

- **Inline styles + CSS variables only** — no Tailwind colour/type/spacing classes, no hardcoded hex or px values
- **Flat HTML** — collapse Figma-generated nesting to the minimum elements needed
- **Semantic tokens only** — `src/tokens/semantics.css`, never primitives
- **Only use Figma** (`get_design_context`) when the user explicitly asks — do not call Figma tools unless instructed
- **Update `references/components.md`** after building — set status ✅ and add code path
- **Icons always use Material Symbols Rounded** — `fontFamily: "'Material Symbols Rounded'"` — never Outlined, never Sharp

---

# Angular Component Library

Production: `dashboard.auctionsplus.com.au` — Angular 17.1.2, Tailwind, standalone components.

## Always read before building Angular components

`angular/REFERENCE.md` — production HTML patterns, class conventions, component inventory, token quick-ref.

Do NOT re-read `references/tokens.md`, `references/components.md`, or `production-sample.html` in full. Use targeted greps on `production-sample.html` only if `angular/REFERENCE.md` lacks the specific pattern needed.

## Angular hard rules

- **Standalone components** — `standalone: true`, `ChangeDetectionStrategy.OnPush`
- **Selector prefix** — always `ap-`
- **Component CSS only** — all values via CSS variable tokens; no hardcoded hex or px
- **Class naming matches production** — `btn btn-filled btn-primary`, `form-input`, `icon-outlined` etc.
- **Angular 17 control flow** — `@if` / `@for`, never `*ngIf` / `*ngFor`
- **Input names match production attributes** — e.g. `color` not `variant` for buttons
- **Icons** — `icon-outlined` / `icon-solid` / `icon-outlined-new` CSS classes; Material Symbols Rounded loaded globally
- **Update `angular/REFERENCE.md`** after building — set status ✅ and add file path

## File structure

```
angular/components/{ap-name}/
  {ap-name}.component.ts
  {ap-name}.component.html
  {ap-name}.component.css
  index.ts
```
