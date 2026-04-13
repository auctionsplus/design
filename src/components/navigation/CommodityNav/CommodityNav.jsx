import { LargeIconButton } from '../../actions/Button/index.js'

/* ── CommodityNav ─────────────────────────────────────────── */

const COMMODITIES = [
  { id: 'cattle',    label: 'Cattle'    },
  { id: 'sheep',     label: 'Sheep'     },
  { id: 'machinery', label: 'Machinery' },
  { id: 'equine',    label: 'Equine'    },
  { id: 'dog',       label: 'Dog'       },
  { id: 'goat',      label: 'Goat'      },
  { id: 'property',  label: 'Property'  },
]

export function CommodityNav({ value, onChange, style }) {
  return (
    <nav
      style={{
        display:         'flex',
        alignItems:      'stretch',
        overflowX:       'auto',
        backgroundColor: 'var(--color-bg-white)',
        borderBottom:    'var(--border-width-default) solid var(--color-border-grey-light)',
        paddingInline:   'var(--spacing-sm)',
        ...style,
      }}
    >
      {COMMODITIES.map(c => (
        <LargeIconButton
          key={c.id}
          label={c.label}
          active={value === c.id}
          onClick={() => onChange?.(c.id)}
          icon={
            <img
              src={`/icons/commodity/${c.id}.svg`}
              alt=""
              aria-hidden="true"
              style={{ width: 32, height: 32, display: 'block' }}
            />
          }
        />
      ))}
    </nav>
  )
}

export default CommodityNav
