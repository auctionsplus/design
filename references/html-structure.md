# HTML Structure & Layout Rules

This file defines how HTML should be structured in Design System components.
Read this before building any component.

---

## Core Principle — Flat is Better

Every extra div or span adds weight, makes debugging harder, and can break
flex layouts in unexpected ways. Before adding a wrapper element, ask:
**can the parent do this job?**

```jsx
// ❌ WRONG — unnecessary wrapper
<div style={{ display: 'flex' }}>
  <span style={{ ... }}>Label</span>
</div>

// ✅ CORRECT — flex on the element itself
<span style={{ display: 'inline-flex', alignItems: 'center' }}>
  Label
</span>
```

---

## Flexbox First — Always

All layout in Design System uses flexbox. Never use:
- Absolute positioning for layout (only for overlays, tooltips, badges)
- Float
- Inline-block for alignment
- Margin hacks for centering

### Flexbox on the component element itself
```jsx
// ✅ Tag — flex on the span itself, no wrapper needed
<span style={{
  display:     'inline-flex',
  alignItems:  'center',
  gap:         'var(--spacing-xs)',
}}>
  <Icon /> Label
</span>

// ✅ Button — flex on the button itself
<button style={{
  display:        'inline-flex',
  alignItems:     'center',
  justifyContent: 'center',
  gap:            'var(--spacing-xs)',
}}>
  <Icon /> Label
</button>
```

### When a wrapper IS needed
Only add a wrapper when:
1. You need to separate layout concerns (a card that contains multiple flex children)
2. The element type doesn't support flex (e.g., `<img>` or `<input>`)
3. You're building a pattern/organism with distinct sections (header, body, footer)

```jsx
// ✅ Justified — card has distinct sections that need separate layout
<article style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>  {/* header row */}
    <span>{title}</span>
    <Tag variant="live" />
  </div>
  <p>{description}</p>                                          {/* body */}
  <footer style={{ display: 'flex', gap: 'var(--spacing-xs)' }}> {/* footer row */}
    <Tag variant="price" />
    <Tag variant="assessed" />
  </footer>
</article>
```

---

## HTML Element Selection

Use the most semantically appropriate element. This matters for accessibility
and reduces the need for extra styling resets.

| Use case | Element | Why |
|---|---|---|
| Clickable action | `<button>` | Gets keyboard focus, click events, cursor:pointer for free |
| Navigation link | `<a>` | Gets href, focus ring, visited state |
| Inline label/badge | `<span>` | Inline by default, no margin/padding reset needed |
| Card / content block | `<article>` or `<div>` | Article for self-contained content, div for layout |
| Page section | `<section>` | Landmark for screen readers |
| Primary navigation | `<nav>` | Screen reader landmark |
| List of items | `<ul>` + `<li>` | Correct semantics for lists (lot list, nav items) |
| Form field group | `<label>` + `<input>` | Label association is free — no JS needed |

### Never use div when a semantic element fits
```jsx
// ❌ WRONG
<div onClick={handleClick} style={{ cursor: 'pointer' }}>Click me</div>

// ✅ CORRECT
<button onClick={handleClick}>Click me</button>
```

---

## Avoiding Nested Divs

### Common trap — wrapping everything in divs
Figma auto-layout frames often export as nested divs. Flatten them.

```jsx
// ❌ What Figma might generate — 4 levels of nesting
<div className="container">
  <div className="inner">
    <div className="row">
      <div className="label">
        <span>Text</span>
      </div>
    </div>
  </div>
</div>

// ✅ What we write — flat
<span>Text</span>
```

### When you see deeply nested Figma output
Ask: what is the actual visual result? Usually it's just padding + flex.
Collapse the nesting to the minimum elements needed to achieve that result.

```jsx
// ❌ Figma generates this for a simple tag
<div style={{ display: 'flex', padding: '2px 4px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ fontSize: '12px' }}>$/Head</span>
  </div>
</div>

// ✅ We write this — same visual result, flat
<span style={{
  display:     'inline-flex',
  alignItems:  'center',
  padding:     'var(--spacing-0-5) var(--spacing-xs)',
  fontSize:    'var(--type-size-label-md)',
  lineHeight:  'var(--type-lh-label-md)',
}}>
  $/Head
</span>
```

---

## Auto Layout → Flexbox Mapping

Figma auto layout properties map directly to CSS flexbox:

| Figma | CSS |
|---|---|
| Direction: Horizontal | `flexDirection: 'row'` (default) |
| Direction: Vertical | `flexDirection: 'column'` |
| Align items: Center | `alignItems: 'center'` |
| Align items: Start | `alignItems: 'flex-start'` |
| Align items: End | `alignItems: 'flex-end'` |
| Justify: Space between | `justifyContent: 'space-between'` |
| Justify: Center | `justifyContent: 'center'` |
| Gap | `gap: 'var(--spacing-xs)'` |
| Padding | `padding: 'var(--spacing-xs) var(--spacing-sm)'` |
| Fill container | `flex: 1` or `width: '100%'` |
| Hug contents | No width/height set (default) |

### Shorthand padding
```jsx
// ✅ Use shorthand where padding is uniform
padding: 'var(--spacing-xs)'

// ✅ Use shorthand for vertical/horizontal pairs
padding: 'var(--spacing-0-5) var(--spacing-xs)'  // top/bottom left/right

// ✅ Use individual props when sides differ
paddingTop:    'var(--spacing-xs)',
paddingBottom: 'var(--spacing-xs)',
paddingLeft:   'var(--spacing-sm)',
paddingRight:  'var(--spacing-sm)',
```

---

## Specific Component Patterns

### Tags and Badges — single element
Tags are a single `<span>` with inline-flex. Never two elements.
```jsx
<span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
  {icon && <Icon />}
  {label}
</span>
```

### Buttons — single element
Buttons are a `<button>` with inline-flex. No inner div.
```jsx
<button style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
  {leadingIcon && <Icon />}
  {label}
  {trailingIcon && <Icon />}
</button>
```

### Input fields — label wrapping input
```jsx
<label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-0-5)' }}>
  <span style={{ fontSize: 'var(--type-size-label-md)' }}>Field label</span>
  <input style={{ ... }} />
</label>
```

### Cards — article with flex column
```jsx
<article style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-md)' }}>
  <img style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} />
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', padding: 'var(--spacing-md)' }}>
    {/* content */}
  </div>
</article>
```

### Row with icon + text
```jsx
// ✅ Single span, no wrapper
<span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
  <svg />
  Label text
</span>
```

### Navigation list
```jsx
<nav>
  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-0-5)' }}>
    <li>
      <a style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
        <Icon /> Dashboard
      </a>
    </li>
  </ul>
</nav>
```

---

## What to Always Avoid

| Pattern | Why | Alternative |
|---|---|---|
| `position: absolute` for layout | Breaks flex/grid flow | Use flexbox |
| `width: 100px` hardcoded | Breaks responsive | Use `flex: 1` or `min-width` |
| `margin: 0 auto` for centering | Requires known width | Use `justifyContent: 'center'` on parent |
| `float` | Legacy, causes height collapse | Flexbox |
| `display: table` | Verbose, hard to override | Flexbox or grid |
| Wrapper div just for padding | Adds depth | Put padding on the component element |
| Wrapper div just for background | Adds depth | Put bg on the component element |
| `!important` | Specificity wars | Better token structure |
| Pixel values for spacing | Breaks token system | Always use spacing tokens |
| Pixel values for colours | Breaks theming | Always use colour tokens |

---

## Responsive Layout

Design System components are built mobile-first using flex and wrapping:

```jsx
// ✅ Tags wrap naturally with flex-wrap
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
  <Tag /><Tag /><Tag />
</div>

// ✅ Cards in a responsive grid
<div style={{
  display:             'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap:                 'var(--spacing-lg)',
}}>
  <LotCard /><LotCard /><LotCard />
</div>
```

---

## Accessibility Checklist

Every component must:
- [ ] Use semantic HTML element (not a div when button/span/a fits)
- [ ] Have `focus-visible` outline (handled globally in `index.css`)
- [ ] Include `aria-label` if content is icon-only
- [ ] Use sufficient colour contrast (Design System tokens are pre-checked)
- [ ] Not rely solely on colour to convey meaning (use icon + colour)
