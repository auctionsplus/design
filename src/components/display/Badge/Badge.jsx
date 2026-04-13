const VARIANTS = {
  blue: {
    bg:   'var(--color-brand-primary-dark)',
    text: 'var(--color-text-white)',
  },
  red: {
    bg:   'var(--color-status-red)',
    text: 'var(--color-text-white)',
  },
  yellow: {
    bg:   'var(--color-accent-yellow)',
    text: 'var(--color-text-black)',
  },
  grey: {
    bg:   'var(--color-bg-grey-light)',
    text: 'var(--color-text-slate)',
  },
}

export function Badge({ count = 1, variant = 'blue', className, style }) {
  const v       = VARIANTS[variant] ?? VARIANTS.blue
  const display = count > 99 ? '99+' : String(count)
  const single  = display.length === 1

  return (
    <span
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        height:          '16px',
        width:           single ? '16px' : undefined,
        padding:         single ? undefined : '0 var(--spacing-xs)',
        borderRadius:    'var(--radius-sm)',
        backgroundColor: v.bg,
        color:           v.text,
        fontFamily:      'var(--type-family-primary)',
        fontSize:        'var(--type-size-label-md)',
        lineHeight:      'var(--type-lh-label-md)',
        fontWeight:      500,
        whiteSpace:      'nowrap',
        flexShrink:      0,
        ...style,
      }}
    >
      {display}
    </span>
  )
}

export default Badge
