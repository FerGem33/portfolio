'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { accentVar, type Project } from '@/lib/projects'

export function ProjectCover({
  project,
  priority,
  className,
}: {
  project: Project
  priority?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * 8).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`)
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={
        'group/cover relative aspect-[4/3] overflow-hidden border border-border bg-card [perspective:1200px] ' +
        (className ?? '')
      }
      style={{ boxShadow: `0 30px 80px -40px ${accentVar[project.accent]}` }}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out [transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))] [transform-style:preserve-3d]"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} — ${project.kicker}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/cover:scale-[1.04]"
        />
        {/* accent wash */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-40 transition-opacity duration-500 group-hover/cover:opacity-70"
          style={{
            background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), ${accentVar[project.accent]}, transparent 45%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        {/* hairline highlight */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>

      <span className="absolute left-3 top-3 border border-white/10 bg-background/75 px-2 py-1 font-mono text-[9px] tracking-[.13em] backdrop-blur" style={{ color: accentVar[project.accent] }}>{project.year}</span>
    </div>
  )
}
