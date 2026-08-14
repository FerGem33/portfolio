import { Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const items = [
  {
    place: 'Finalista nacional', title: 'Gran Premio de México del ICPC 2025', accent: 'var(--amber)',
  },
  {
    place: '1er lugar', title: 'Software Inteligente del HackaTecNM 2026 Local',
    accent: 'var(--amber)',
  },
  {
    place: '2do lugar', title: 'Hackathon Daimler 2025',
    accent: 'var(--cyan)',
  },
]

export function Competitions() {
  return (
    <section className="relative border-y border-border bg-[linear-gradient(90deg,rgba(197,137,27,.05),transparent_55%)]"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="02" label="Achievements" />

        <div className="mt-10 border-y border-border">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group grid items-center gap-4 border-b border-border py-6 last:border-0 md:grid-cols-[48px_170px_1fr] md:py-7">
                <Trophy className="h-5 w-5" style={{ color: item.accent }} />
                <span className="text-sm" style={{ color: item.accent }}>{item.place}</span>
                <h3 className="font-serif text-xl leading-tight transition-transform group-hover:translate-x-1 md:text-2xl">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
