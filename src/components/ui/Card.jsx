import { useRef } from 'react'

export default function Card({ children, className = '' }) {
  const ref = useRef(null)

  const handleMouseMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`glass glow-card rounded-lg ${className}`}>
      {children}
    </div>
  )
}
