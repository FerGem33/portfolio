import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  label,
  children,
  className,
}: {
  index: string
  label: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-amber/70">{index}</span>
        <span className="hairline h-px w-8 border-t" />
        <span className="eyebrow">
          {label}
        </span>
      </div>
      {children && (
        <p className="mt-5 text-pretty font-serif text-2xl leading-snug tracking-tight text-foreground/90 md:text-3xl">
          {children}
        </p>
      )}
    </Reveal>
  )
}
