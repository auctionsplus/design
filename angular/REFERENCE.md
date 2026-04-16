# Angular Component Reference

Production app: `dashboard.auctionsplus.com.au` — Angular 17.1.2, standalone components, `ap-` selector prefix.
Source: `production-sample.html` (stripped from `production-sample.rtf`).

---

## Production Component Inventory

| Selector | Status | Notes |
|---|---|---|
| `ap-button` | ✅ Built | `angular/components/ap-button/` |
| `ap-sidenav-item` | ✅ Built | `angular/components/ap-sidenav-item/` |
| `ap-tab-navigation` | ✅ Built | `angular/components/ap-tab-navigation/` |
| `ap-top-navigation` | ⬜ | Dark brand header bar, `h-14` |
| `ap-side-navigation` | ⬜ | Full sidebar shell |
| `ap-breadcrumb` | ✅ Built | `angular/components/ap-breadcrumb/` |
| `ap-number-input` | ⬜ | Wraps `<input class="form-input">` |
| `ap-dropdown` | ⬜ | Trigger + panel; `align` input |
| `ap-lot-status` | ⬜ | `type` input, badge-style pill |
| `ap-auction-status` | ⬜ | `type="auction"` \| `"pre-auction"` |
| `ap-toast` | ⬜ | Fixed top-right toast stack |
| `ap-breadcrumb` | ⬜ | |
| `ap-page-layout` | ⬜ | Page shell with sidebar slot |
| `ap-main-layout` | ⬜ | Inner content area |

---

## File Structure

```
angular/
  components/
    ap-button/
      ap-button.component.ts
      ap-button.component.html
      ap-button.component.css
      index.ts
  REFERENCE.md   ← this file
```

Each component is a standalone Angular 17 component. No NgModule needed.

---

## Rules

- **Standalone components** — `standalone: true`, `ChangeDetectionStrategy.OnPush`
- **Selector prefix** — always `ap-`
- **CSS** — component `.css` file only; all values via CSS variable tokens from `semantics.css`
- **No hardcoded hex or px** in component CSS — use token names
- **Icons** — `icon-outlined` / `icon-solid` / `icon-outlined-new` CSS classes (production convention); Material Symbols Rounded font loaded globally
- **Angular 17 template syntax** — use `@if` / `@for` control flow (not `*ngIf` / `*ngFor`)
- **Inputs mirror production** — use `color` not `variant` for buttons; use the same `@Input()` names as production attributes

---

## CSS Class Conventions (from production)

### Buttons
```
btn                        base
btn-filled                 filled style (all except text variant)
btn-primary                primary color
btn-secondary              secondary color
btn-positive               positive/green
btn-destructive            destructive/red
btn-text                   text/link style (no btn-filled)
btn-sm                     small size (32px height)
```

### Forms
```
form-label                 <label> element
form-input                 <input> / <textarea> element
form-input-append          trailing unit label (e.g. "$/Lot")
form-input-icon-prepend    input with leading icon wrapper
form-input-icon-append     input with trailing icon wrapper
```

### Icons
```
icon-outlined              Material Symbols Rounded, weight 400
icon-outlined-new          Material Symbols Rounded, newer icons
icon-solid                 Material Symbols Rounded, FILL 1
```

---

## Production HTML Patterns

### ap-button
```html
<!-- Default (primary, md) -->
<ap-button color="primary">
  <button type="button" class="btn btn-filled btn-primary">Label</button>
</ap-button>

<!-- Disabled -->
<ap-button color="primary">
  <button type="button" disabled class="btn btn-filled btn-primary">Label</button>
</ap-button>
```
Inputs: `color` (`primary`|`secondary`|`positive`|`destructive`|`text`), `size` (`sm`|`md`), `disabled`, `type`, `leadingIcon`, `trailingIcon`

---

### ap-sidenav-item
```html
<ap-sidenav-item title="My Sales">
  <div class="p-1.5">
    <!-- Link item -->
    <a
      routerLinkActive="bg-brand-primary-50 text-brand-primary-800"
      class="flex gap-x-2 items-center w-full px-3 py-2.5
             text-brand-dark hover:bg-brand-primary-50 hover:text-brand-primary-800
             rounded font-medium"
      href="/my-sales"
    >
      <span icon class="icon-outlined">list_alt</span>
      <span class="mr-auto">My Sales</span>
    </a>

    <!-- Button item (has children/dropdown) -->
    <button
      type="button"
      routerLinkActive="bg-brand-primary-50 text-brand-primary-800"
      class="flex gap-x-2 items-center w-full px-3 py-2.5
             hover:bg-brand-primary-50 hover:text-brand-primary-800
             rounded font-medium text-brand-dark"
    >
      <span icon class="icon-outlined">person</span>
      <span class="mr-auto">My Account</span>
      <span class="icon-solid">expand_more</span>
    </button>
  </div>
</ap-sidenav-item>
```
Inputs: `title` (string)
Active state: `routerLinkActive="bg-brand-primary-50 text-brand-primary-800"` applied to inner `<a>` or `<button>`
Icon variant: `icon-outlined` for standard icons, `icon-outlined-new` for newer ones (e.g. `keep`, `link`)

---

### ap-tab-navigation
```html
<ap-tab-navigation>
  <div class="flex border-b border-b-gray-300 flex-grow">

    <!-- Active tab -->
    <button type="button"
      class="px-4 py-2.5 text-title-sm 2xl:text-title-medium font-medium
             border-b-2 -mb-[1px] whitespace-nowrap
             bg-opacity-0 bg-gray-800
             hover:border-b-brand-primary-900 active:border-b-brand-primary-900 active:bg-opacity-8
             border-b-brand-primary-900 text-brand-primary-900">
      Upcoming Auctions
    </button>

    <!-- Inactive tab -->
    <button type="button"
      class="px-4 py-2.5 text-title-sm 2xl:text-title-medium font-medium
             border-b-2 -mb-[1px] whitespace-nowrap
             bg-opacity-0 bg-gray-800
             hover:border-b-brand-primary-900 active:border-b-brand-primary-900 active:bg-opacity-8
             text-gray-600 border-b-transparent">
      Forward+
    </button>

  </div>
</ap-tab-navigation>
```
Active: `border-b-brand-primary-900 text-brand-primary-900`
Inactive: `border-b-transparent text-gray-600`

---

### ap-top-navigation
```html
<ap-top-navigation>
  <div class="bg-brand-dark text-white fixed top-0 left-0 w-full xl:relative">
    <!-- Desktop bar -->
    <div class="px-4 py-2 justify-between hidden xl:flex h-14">
      <a class="flex items-center" href="/home">
        <img src="...logo-white.svg" class="block h-6 w-auto">
        <div class="border-r-2 border-r-white h-1/2 mx-1.5"></div>
        <div class="text-xl">Dashboard</div>
      </a>
      <div class="flex gap-x-7 items-center">
        <!-- nav links + profile dropdown -->
        <a class="text-white border-b-2 border-b-transparent hover:border-b-white font-medium py-1 flex items-start gap-x-2" href="...">
          <div class="icon-outlined text-xl">home</div>
          <span>AuctionsPlus</span>
        </a>
      </div>
    </div>
  </div>
</ap-top-navigation>
```

---

### ap-breadcrumb
```html
<ap-breadcrumb class="h-11 bg-white p-4 sm:p-0 sm:bg-transparent mb-2 sm:mb-0">
  <div class="flex items-center overflow-x-auto gap-x-1 text-gray-700 text-label-lg font-regular">
    <a class="hover:text-brand-primary hover:underline" href="/home">Dashboard</a>
    <div class="icon-outlined text-xl flex-shrink-0">chevron_right</div>
    <a class="hover:text-brand-primary hover:underline whitespace-nowrap" href="/my-sales">My Sales</a>
  </div>
</ap-breadcrumb>
```

---

### ap-number-input
```html
<ap-number-input formControlName="startPrice">
  <div>
    <input type="text" class="form-input" placeholder="" disabled>
  </div>
</ap-number-input>
```
Integrates with Angular Reactive Forms via `formControlName`.

---

### ap-toast
```html
<ap-toast>
  <div class="fixed flex flex-col items-center top-0 right-0 z-50 space-y-2 py-3 px-4 w-full pointer-events-none">
    <!-- toast items injected here -->
  </div>
</ap-toast>
```

---

## Token Quick Reference

All values from `src/tokens/semantics.css`. Must be imported globally in `angular.json` styles array.

| Use | Token |
|---|---|
| Brand blue | `--color-brand-primary` |
| Brand blue hover | `--color-btn-primary-hover` |
| Brand dark (navy) | `--color-bg-dark` |
| White text | `--color-text-white` |
| Dark text | `--color-text-dark` |
| Grey text | `--color-text-grey` |
| Grey border | `--color-border-grey` |
| Green fill | `--color-bg-green` |
| Red fill | `--color-bg-red` |
| Button height md | `--size-btn-md` (40px) |
| Button height sm | `--size-btn-sm` (32px) |
| Border radius | `--radius-sm` (4px) |
| Body SM font | `--type-size-body-sm` (14px) |
| Label MD font | `--type-size-label-md` (12px) |
| Icon MD | `--size-icon-md` (18px) |
| Disabled opacity | `--opacity-disabled` (0.4) |
| Spacing SM | `--spacing-sm` (8px) |
| Spacing MD | `--spacing-md` (16px) |
| Spacing LG | `--spacing-lg` (24px) |
