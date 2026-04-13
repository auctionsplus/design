# Design System Token Reference

Full reference for all semantic tokens. Always use these in components —
never use primitive values directly.

Source files:
- `src/tokens/primitives.css` — raw values
- `src/tokens/semantics.css` — semantic aliases (USE THESE)

---

## Colour Tokens

### Brand
| Token | Value | Use |
|---|---|---|
| `--color-brand-primary` | #1971D8 | Buttons, CTAs, links, interactive |
| `--color-brand-primary-dark` | #1542A7 | Hover states, active nav |
| `--color-brand-primary-light` | #E3F2FE | Tinted backgrounds, active sidebar items |

### Background
| Token | Value | Use |
|---|---|---|
| `--color-bg-white` | #FFFFFF | Page base, card backgrounds |
| `--color-bg-light` | #F4F4F4 | App shell background, section fills |
| `--color-bg-lighter` | #F7FAFC | Lightest grey surface (Figma: Grey Light) |
| `--color-bg-grey-light` | #DBDEE0 | Hover states, secondary button hover |
| `--color-bg-grey-medium` | #B7BABC | Dividers, disabled fills |
| `--color-bg-grey` | #B7BABC | Legacy alias for grey-medium |
| `--color-bg-grey-dark` | #3D4041 | Dark UI fills |
| `--color-bg-default` | #013C65 | Dark brand nav, sidebar |
| `--color-bg-dark` | #002341 | Darkest navy fill |
| `--color-bg-dark-light` | #E4E8ED | Light navy tint |
| `--color-bg-blue-light` | #E3F2FE | Blue tinted backgrounds |
| `--color-bg-red` | #CD002B | Error fill backgrounds |
| `--color-bg-red-light` | #FFECF1 | Error tinted backgrounds |
| `--color-bg-orange` | #D96725 | Warning fill backgrounds |
| `--color-bg-orange-light` | #FDF4E3 | Warning tinted backgrounds |
| `--color-bg-green` | #00873D | Success / positive fill |
| `--color-bg-green-dark` | #006728 | Strong success emphasis |
| `--color-bg-green-light` | #E7F7EB | Success tinted backgrounds |
| `--color-bg-input-disabled` | ~4% grey tint | Disabled input background |

### Text
| Token | Value | Use |
|---|---|---|
| `--color-text-dark` | #002341 | Primary body text |
| `--color-text-slate` | #4a5565 | Secondary slate text |
| `--color-text-grey-dark` | #3D4041 | Secondary and supporting text |
| `--color-text-grey` | #5C5E60 | Placeholder, secondary labels |
| `--color-text-grey-light` | #B7BABC | Disabled labels, de-emphasised text |
| `--color-text-black` | #000000 | High contrast text |
| `--color-text-white` | #FFFFFF | Text on dark/brand backgrounds |
| `--color-text-brand-primary` | #1971D8 | Brand-coloured text, links |
| `--color-text-brand-primary-dark` | #1542A7 | Hover on brand text |
| `--color-text-red` | #CD002B | Error message text |
| `--color-text-orange` | #D96725 | Warning message text |
| `--color-text-green` | #006728 | Success message text |

### Border
| Token | Value | Use |
|---|---|---|
| `--color-border-grey` | #B7BABC | Standard input and card borders |
| `--color-border-grey-light` | #DBDEE0 | Dividers, low-emphasis borders |
| `--color-border-grey-dark` | #3D4041 | High emphasis borders |
| `--color-border-brand-primary` | #1971D8 | Brand-coloured borders |
| `--color-border-brand-primary-dark` | #1542A7 | Dark brand borders |
| `--color-border-red` | #CD002B | Error state borders |
| `--color-border-orange` | #D96725 | Warning state borders |
| `--color-border-green` | #00873D | Success state borders |

### Status
| Token | Value | Use |
|---|---|---|
| `--color-status-red` | #CD002B | Error fills and icons |
| `--color-status-red-light` | #FFECF1 | Error alert banners |
| `--color-status-orange` | #D96725 | Warning fills |
| `--color-status-orange-light` | #FDF4E3 | Warning alert banners |
| `--color-status-green` | #00873D | Success fills |
| `--color-status-green-dark` | #006728 | Strong success emphasis |
| `--color-status-green-light` | #E7F7EB | Success alert banners |

### Accent
| Token | Value | Use |
|---|---|---|
| `--color-accent-yellow` | #FFB700 | Yellow tags, lot status highlights |
| `--color-accent-yellow-light` | #FFF9E1 | Yellow tinted backgrounds |
| `--color-accent-teal` | #005147 | Teal tags, accreditation |
| `--color-accent-teal-light` | #DDEEED | Teal tinted backgrounds |
| `--color-accent-purple` | #6A1B9A | Purple tags, percentile Top 5% |
| `--color-accent-purple-light` | #F3E5F5 | Purple tinted backgrounds |
| `--color-accent-pink` | #760046 | Pink tags and labels |
| `--color-accent-pink-light` | #F3E0EA | Pink tinted backgrounds |

### Button Hover
| Token | Use |
|---|---|
| `--color-btn-primary-hover` | Primary button hover (90% brand-primary + white) |
| `--color-btn-secondary-hover` | Secondary button hover (#DBDEE0 grey-light) |
| `--color-btn-positive-hover` | Positive button hover (90% green + white) |
| `--color-btn-destructive-hover` | Destructive button hover (90% red + white) |

---

## Spacing Tokens

| Token | Value | Use |
|---|---|---|
| `--spacing-0-5` | 2px | Sub-pixel gaps, tag padding |
| `--spacing-2xs` | 2px | Alias for 0-5 |
| `--spacing-xs` | 4px | Tight padding, icon gaps |
| `--spacing-sm` | 8px | Small gaps, compact items |
| `--spacing-sm-md` | 12px | Button padding, form inner |
| `--spacing-md` | 16px | Standard padding, card inner |
| `--spacing-md-lg` | 20px | Medium-large spacing |
| `--spacing-lg` | 24px | Section padding, card gaps |
| `--spacing-xl` | 32px | Large section spacing |
| `--spacing-2xl` | 48px | Large component padding |
| `--spacing-3xl` | 64px | Layout section gaps |
| `--spacing-4xl` | 80px | Hero and banner spacing |
| `--spacing-5xl` | 96px | Large layout gaps |
| `--spacing-6xl` | 128px | Page-level vertical rhythm |

---

## Border Radius Tokens

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 2px | Tags, badges, tooltips |
| `--radius-sm` | 4px | Input fields, buttons |
| `--radius-md` | 8px | Cards, panels, dropdowns |
| `--radius-lg` | 12px | Large cards, drawers |
| `--radius-xl` | 16px | Hero cards, feature panels |
| `--radius-full` | 9999px | Pills, avatar circles, status dots |

---

## Border Width Tokens

| Token | Value | Use |
|---|---|---|
| `--border-width-default` | 1px | Input borders, card outlines |
| `--border-width-thick` | 2px | Active states, selected items |
| `--border-width-focus` | 3px | Keyboard focus rings |

---

## Shadow Tokens

Navy-tinted shadows (`rgba(17,51,83,x)`) — sourced from Figma Elevation page. Four named levels in Figma: Shadow, Shadow-Dark, Shadow-Super-Dark, Shadow-Down.

| Token | Figma name | Value | Use |
|---|---|---|---|
| `--shadow-xs` | Shadow-Down | `0px 1px 6px 0px rgba(17,51,83,0.06)` | Chips, tags, subtle lift |
| `--shadow-sm` | Shadow | `0px 4px 12px 0px rgba(17,51,83,0.02)` ×2 | Cards, list items |
| `--shadow-md` | Shadow-Dark | `0px 4px 12px 0px rgba(17,51,83,0.04)` ×2 | Dropdowns, popovers |
| `--shadow-lg` | Shadow-Super-Dark | `0px 4px 12px 0px rgba(17,51,83,0.06)` ×2 | Modals, drawers |
| `--shadow-xl` | — | `0px 10px 24px 0px rgba(17,51,83,0.08)` + sm | Full-page overlays |

---

## Typography Tokens

### Font family
| Token | Value |
|---|---|
| `--type-family-primary` | 'Roboto', sans-serif |

### Font weights
| Token | Use |
|---|---|
| `--type-weight-regular` | 400 — body copy |
| `--type-weight-medium` | 500 — labels, button text |
| `--type-weight-semibold` | 600 — headings, emphasis |
| `--type-weight-bold` | 700 — display headings |

### Font sizes + line heights (always use together)
| Scale | Size token | Line height token | Size | LH |
|---|---|---|---|---|
| Label SM | `--type-size-label-sm` | `--type-lh-label-sm` | 10px | 16px |
| Label MD | `--type-size-label-md` | `--type-lh-label-md` | 12px | 18px |
| Body SM | `--type-size-body-sm` | `--type-lh-body-sm` | 14px | 22px |
| Body MD | `--type-size-body-md` | `--type-lh-body-md` | 16px | 24px |
| Title MD | `--type-size-title-md` | `--type-lh-title-md` | 18px | 28px |
| Title LG | `--type-size-title-lg` | `--type-lh-title-lg` | 20px | 30px |
| Headline SM | `--type-size-headline-sm` | `--type-lh-headline-sm` | 24px | 36px |
| Headline MD | `--type-size-headline-md` | `--type-lh-headline-md` | 28px | 42px |
| Headline LG | `--type-size-headline-lg` | `--type-lh-headline-lg` | 32px | 48px |
| Display SM | `--type-size-display-sm` | `--type-lh-display-sm` | 36px | 54px |
| Display MD | `--type-size-display-md` | `--type-lh-display-md` | 45px | 68px |
| Display LG | `--type-size-display-lg` | `--type-lh-display-lg` | 57px | 86px |

---

## Sizing Tokens

### Icon sizes
| Token | Value | Use |
|---|---|---|
| `--size-icon-xs` | 14px | Extra-small icons |
| `--size-icon-sm` | 16px | Small button icons |
| `--size-icon-md` | 18px | Default button icons |
| `--size-icon-lg` | 20px | Standard inline icons |
| `--size-icon-xl` | 24px | Large icons, favourite buttons |
| `--size-icon-2xl` | 32px | Extra-large display icons |

### Button heights
| Token | Value | Use |
|---|---|---|
| `--size-btn-sm` | 32px | Small button height |
| `--size-btn-md` | 40px | Default button height |
| `--size-btn-lg` | 48px | Large button height |

### Avatar sizes
| Token | Value | Use |
|---|---|---|
| `--size-avatar-sm` | 24px | Small avatars |
| `--size-avatar-md` | 32px | Medium avatars (header) |
| `--size-avatar-lg` | 40px | Large avatars (contact cards) |

---

## Opacity Tokens

| Token | Value | Use |
|---|---|---|
| `--opacity-disabled` | 0.4 | Disabled elements |
| `--opacity-subtle` | 0.6 | Placeholder text, secondary hints |
| `--opacity-overlay` | 0.8 | Modal backdrop overlays |

---

## Z-Index Tokens

| Token | Value | Use |
|---|---|---|
| `--z-base` | 0 | Default stacking |
| `--z-dropdown` | 100 | Dropdowns, select menus |
| `--z-sticky` | 200 | Sticky headers, fixed nav |
| `--z-modal` | 300 | Modal dialogs, drawers |
| `--z-toast` | 400 | Toast notifications |
| `--z-tooltip` | 500 | Tooltips — always on top |

---

## Transition Tokens

| Token | Value | Use |
|---|---|---|
| `--transition-fast` | 150ms | Hover states, quick flips |
| `--transition-base` | 300ms | Standard animations |
| `--transition-slow` | 500ms | Slow reveals, page transitions |
| `--easing-default` | ease-in-out | General purpose easing |
| `--easing-in` | ease-in | Entry animations |
| `--easing-out` | ease-out | Exit animations |
