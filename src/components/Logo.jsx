const LOGO_SRC = '/logo.png'

const SIZES = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-16',
  xl: 'h-24',
}

export default function Logo({ size = 'md', className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt="LEVELUP"
      className={`w-auto object-contain ${SIZES[size] || SIZES.md} ${className}`}
    />
  )
}
