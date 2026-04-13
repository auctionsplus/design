/* ─────────────────────────────────────────────────────────────
   Logo — Design System component library
   Figma file: TI2QRswI37Xh8W8h5CrypW
   Dark:  10:4564  ·  Light: 10:4569  ·  White: 1794:701

   Named exports:
     Logo   AuctionsPlus horizontal logo in three colour variants
   ───────────────────────────────────────────────────────────── */

import iconColor from '../../../assets/logo/icon-color.svg'
import iconWhite from '../../../assets/logo/icon-white.svg'
import wordmarkDark  from '../../../assets/logo/wordmark-dark.svg'
import wordmarkLight from '../../../assets/logo/wordmark-light.svg'

/*
  Layout (matches Figma):
  Container aspect ratio 103 ∶ 14 (175 × 23.8 px at default width)

  Icon   — left: 0,       width: 17.48%, height: 100%
  Mark   — left: 17.48%,  top: 7.14%, right: 0, bottom: 7.14%

  variant  icon         wordmark
  ─────────────────────────────
  dark     icon-color   wordmark-dark   (standard, on white / light bg)
  light    icon-color   wordmark-light  (reversed, on dark bg)
  white    icon-white   wordmark-light  (fully white, on brand-primary bg)
*/

const VARIANTS = {
  dark:  { icon: iconColor, wordmark: wordmarkDark  },
  light: { icon: iconColor, wordmark: wordmarkLight },
  white: { icon: iconWhite, wordmark: wordmarkLight },
}

/* ── Logo ───────────────────────────────────────────────────── */

export function Logo({
  variant  = 'dark',
  width    = '175px',
  iconOnly = false,
  style,
  className,
}) {
  const { icon, wordmark } = VARIANTS[variant] ?? VARIANTS.dark

  if (iconOnly) {
    return (
      <img
        src={icon}
        alt="AuctionsPlus"
        style={{ width, aspectRatio: '30.5825 / 23.7864', flexShrink: 0, ...style }}
        className={className}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label="AuctionsPlus"
      style={{
        position:    'relative',
        width,
        aspectRatio: '103 / 14',
        flexShrink:  0,
        ...style,
      }}
      className={className}
    >
      {/* Icon / mark */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top:      0,
          left:     0,
          width:    '17.48%',
          height:   '100%',
        }}
      />

      {/* Wordmark */}
      <img
        src={wordmark}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top:      '7.14%',
          right:    0,
          bottom:   '7.14%',
          left:     '17.48%',
          width:    '82.52%',
          height:   '85.72%',
        }}
      />
    </div>
  )
}

export default Logo
