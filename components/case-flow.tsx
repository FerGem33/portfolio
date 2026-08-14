'use client'

import { ArrowRight } from 'lucide-react'

export function CaseFlow({
  steps,
  accent,
}: {
  steps: string[]
  accent: string
}) {
  return (
    <div className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden items-stretch gap-3 md:flex">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-3">
            <div
              className="group relative flex min-h-[92px] flex-1 flex-col justify-center overflow-hidden rounded-xl border p-4 transition-transform hover:-translate-y-1"
              style={{
                borderColor: `color-mix(in oklch, ${accent} 30%, transparent)`,
                background: `linear-gradient(160deg, color-mix(in oklch, ${accent} 12%, transparent), transparent)`,
              }}
            >
              <span
                className="font-mono text-[10px]"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mt-1.5 text-sm font-medium leading-snug text-foreground">
                {step}
              </span>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{ background: accent, opacity: 0.5 }}
              />
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                className="h-4 w-4 shrink-0"
                style={{ color: accent }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <ol className="flex flex-col gap-0 md:hidden">
        {steps.map((step, i) => (
          <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs"
                style={{ borderColor: accent, color: accent }}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span
                  className="mt-1 w-px flex-1"
                  style={{
                    background: `linear-gradient(${accent}, transparent)`,
                  }}
                />
              )}
            </div>
            <span className="pt-1.5 text-sm font-medium leading-snug">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
