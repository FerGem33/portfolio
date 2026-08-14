'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

type Pulse = {
  a: number
  b: number
  t: number
  speed: number
  hue: number
}

// Accent hues (approx): violet 290, cyan 200, blue 255
const HUES = [290, 200, 255, 300]

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    const pointer = { x: -9999, y: -9999, active: false }
    let raf = 0

    const NODE_COUNT = () => {
      const area = width * height
      return Math.max(40, Math.min(90, Math.round(area / 16000)))
    }

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    function init() {
      const count = NODE_COUNT()
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 2.2 + 1.2,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      }))
      pulses = []
    }

    const CONNECT = 150

    function spawnPulse() {
      if (nodes.length < 2) return
      const a = Math.floor(Math.random() * nodes.length)
      let b = Math.floor(Math.random() * nodes.length)
      if (b === a) b = (b + 1) % nodes.length
      const dx = nodes[a].x - nodes[b].x
      const dy = nodes[a].y - nodes[b].y
      if (Math.hypot(dx, dy) > CONNECT * 1.4) return
      pulses.push({
        a,
        b,
        t: 0,
        speed: 0.006 + Math.random() * 0.01,
        hue: nodes[a].hue,
      })
    }

    let frame = 0
    function draw() {
      ctx.clearRect(0, 0, width, height)
      frame++

      // update + edges
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        // pointer attraction
        if (pointer.active) {
          const dx = pointer.x - n.x
          const dy = pointer.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < 180 && d > 0.1) {
            n.x += (dx / d) * 0.25
            n.y += (dy / d) * 0.25
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * 0.32
            ctx.strokeStyle = `hsla(${a.hue}, 75%, 68%, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = `hsla(${n.hue}, 85%, 76%, 1)`
        ctx.shadowColor = `hsla(${n.hue}, 90%, 68%, 1)`
        ctx.shadowBlur = 12
        ctx.arc(n.x, n.y, n.r + 0.4, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += p.speed
        if (p.t >= 1) {
          pulses.splice(i, 1)
          continue
        }
        const a = nodes[p.a]
        const b = nodes[p.b]
        if (!a || !b) {
          pulses.splice(i, 1)
          continue
        }
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${1 - p.t})`
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 1)`
        ctx.shadowBlur = 12
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      if (frame % 14 === 0 && pulses.length < 22) spawnPulse()

      raf = requestAnimationFrame(draw)
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    function onPointerLeave() {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    if (prefersReduced) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
