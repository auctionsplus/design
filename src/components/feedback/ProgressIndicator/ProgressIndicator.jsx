/* ─────────────────────────────────────────────────────────────
   ProgressIndicator — Design System component library

   Named exports:
     ProgressIndicator   Horizontal bar showing a % value
   ───────────────────────────────────────────────────────────── */

/*
  value:   0–100  number
  label:   string shown above the bar (optional)
  showValue: boolean — show the % value to the right (default true)
  size:    'sm' | 'md'
  variant: 'default' | 'success' | 'warning' | 'error'
*/

const VARIANTS = {
  default: 'var(--color-brand-primary)',
  success: 'var(--color-bg-green)',
  warning: 'var(--color-text-orange)',
  error:   'var(--color-bg-red)',
}

const SIZES = {
  sm: '4px',
  md: '8px',
}

export function ProgressIndicator({
  value      = 0,
  label,
  showValue  = true,
  size       = 'md',
  variant    = 'default',
  style,
}) {
  const pct   = Math.min(100, Math.max(0, value))
  const color = VARIANTS[variant] ?? VARIANTS.default
  const h     = SIZES[size] ?? SIZES.md

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', width: '100%', ...style }}>

      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {label && (
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-sm)',
              lineHeight: 'var(--type-lh-body-sm)',
              fontWeight: 500,
              color:      'var(--color-text-dark)',
            }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{
              fontFamily: 'var(--type-family-primary)',
              fontSize:   'var(--type-size-body-sm)',
              lineHeight: 'var(--type-lh-body-sm)',
              fontWeight: 400,
              color:      'var(--color-text-grey-dark)',
              marginLeft: 'auto',
            }}>
              {pct}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div style={{
        width:           '100%',
        height:          h,
        borderRadius:    'var(--radius-full)',
        backgroundColor: 'var(--color-bg-grey-light)',
        overflow:        'hidden',
      }}>
        {/* Fill */}
        <div style={{
          height:          '100%',
          width:           `${pct}%`,
          borderRadius:    'var(--radius-full)',
          backgroundColor: color,
          transition:      'width 0.3s ease',
        }} />
      </div>

    </div>
  )
}

export default ProgressIndicator
