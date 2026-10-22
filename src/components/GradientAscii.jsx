import { useEffect, useRef } from 'react'

/**
 * Animated ASCII gradient used behind the hero. Glyphs are laid out on a grid
 * and lit by a moving "horizon" field, tinted with the supplied palette.
 */
export default function GradientAscii({
  colors = ['#312e81', '#a78bfa', '#f6f8ff', '#67e8f9'],
  characters = ' =+xX0S8#@',
  cellSize = 16,
  density = 0.45,
  gradientOpacity = 0.35,
  glyphOpacity = 0.6,
  speed = 0.6,
  flow = 0.4,
  flicker = 0.15,
  lightMode = true,
  className = '',
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    let last = 0

    const palette = colors.map((hex) => {
      const v = hex.replace('#', '')
      return [
        parseInt(v.slice(0, 2), 16),
        parseInt(v.slice(2, 4), 16),
        parseInt(v.slice(4, 6), 16),
      ]
    })

    const mix = (t) => {
      const clamped = Math.max(0, Math.min(1, t))
      const pos = clamped * (palette.length - 1)
      const i = Math.min(palette.length - 2, Math.floor(pos))
      const f = pos - i
      const a = palette[i]
      const b = palette[i + 1]
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]
    }

    const resize = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const glyphs = [...characters]

    const draw = (now) => {
      raf = requestAnimationFrame(draw)
      if (now - last < 55) return
      last = now

      const t = (now / 1000) * speed
      ctx.clearRect(0, 0, width, height)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = `${Math.round(cellSize * 0.9)}px "JetBrains Mono", ui-monospace, monospace`

      const horizon = height * 0.42
      const sigma = height * 0.34

      for (let y = cellSize / 2; y < height; y += cellSize) {
        for (let x = cellSize / 2; x < width; x += cellSize) {
          const nx = x / Math.max(width, 1)
          const ny = y / Math.max(height, 1)
          const wave = Math.sin(nx * Math.PI * 3 + t * flow) * height * 0.06
          const ridge = Math.exp(-Math.pow(y - horizon - wave, 2) / (2 * sigma * sigma))
          const noise = 0.5 + 0.5 * Math.sin(x * 0.083 + y * 0.11 - t * flow * 1.6)
          let v = ridge * (0.45 + 0.55 * noise)

          // Keep the field sparse: drop cells below the density threshold.
          if (Math.sin(nx * 91.7 + ny * 47.3 + t * 0.7) * 0.5 + 0.5 > density) v *= 0.35

          if (flicker) v *= 1 - flicker * Math.abs(Math.sin(t * 2.3 + nx * 20 + ny * 14))

          if (v <= 0.02) continue

          const glyph = glyphs[Math.min(glyphs.length - 1, Math.floor(v * glyphs.length * 1.6))]
          const [r, g, b] = mix(v)
          const alpha = Math.min(1, v * 1.6) * gradientOpacity * glyphOpacity * (lightMode ? 0.9 : 1.1)

          ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`
          ctx.fillText(glyph, x, y)
        }
      }
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [colors, characters, cellSize, density, gradientOpacity, glyphOpacity, speed, flow, flicker, lightMode])

  return (
    <div ref={containerRef} className={`gradient-ascii-container ${className}`}>
      <canvas ref={canvasRef} className="gradient-ascii-canvas" aria-hidden="true" />
    </div>
  )
}
