const LABEL_TEXT = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-body-sm)',
  lineHeight: 'var(--type-lh-body-sm)',
  color:      'var(--color-text-grey-dark)',
}

const GROUP_LABEL = {
  fontFamily: 'var(--type-family-primary)',
  fontSize:   'var(--type-size-label-md)',
  lineHeight: 'var(--type-lh-label-md)',
  fontWeight: 500,
  color:      'var(--color-text-grey-dark)',
  display:    'block',
}

export function Radio({ label, checked, onChange, disabled, name, value, style, className }) {
  return (
    <label
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        gap:        'var(--spacing-sm)',
        cursor:     disabled ? 'not-allowed' : 'pointer',
        opacity:    disabled ? 'var(--opacity-disabled)' : 1,
        ...style,
      }}
      className={className}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        style={{ display: 'none' }}
      />
      {/* Custom ring */}
      <span
        style={{
          display:         'inline-flex',
          alignItems:      'center',
          justifyContent:  'center',
          width:           '20px',
          height:          '20px',
          borderRadius:    'var(--radius-full)',
          border:          `var(--border-width-default) solid ${checked ? 'var(--color-brand-primary)' : 'var(--color-border-grey)'}`,
          backgroundColor: 'var(--color-bg-white)',
          flexShrink:      0,
        }}
        aria-hidden="true"
      >
        {checked && (
          <span style={{
            width:           '10px',
            height:          '10px',
            borderRadius:    'var(--radius-full)',
            backgroundColor: 'var(--color-brand-primary)',
          }} />
        )}
      </span>
      {label && <span style={LABEL_TEXT}>{label}</span>}
    </label>
  )
}

export function RadioGroup({ label, options = [], name, value, onChange, disabled, style, className }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-0-5)', ...style }}
      className={className}
    >
      {label && <span style={GROUP_LABEL}>{label}</span>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        {options.map(opt => (
          <Radio
            key={opt.value ?? opt}
            label={opt.label ?? opt}
            value={opt.value ?? opt}
            name={name}
            checked={value === (opt.value ?? opt)}
            onChange={() => onChange?.(opt.value ?? opt)}
            disabled={disabled || opt.disabled}
          />
        ))}
      </div>
    </div>
  )
}

export default Radio
