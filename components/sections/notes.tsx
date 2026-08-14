import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const notes = [
  {
    title: 'Why I moved toward an event-based attendance model',
    topic: 'Domain modeling',
    read: '7 min read',
  },
  {
    title: 'Designing hierarchical permissions with clarity',
    topic: 'Backend architecture',
    read: '6 min read',
  },
  {
    title: 'Revisiting my neural network from scratch',
    topic: 'Machine learning',
    read: '8 min read',
  },
]

export function Notes() {
  return (
    <section
      id="notes"
      className="relative border-t border-border bg-[linear-gradient(180deg,transparent,rgba(197,137,27,.035))]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="07" label="Recent notes" />
        </div>

        <div className="mt-12 border-t border-border">
          {notes.map((note, i) => (
            <Reveal key={note.title} delay={i * 70}>
              <a
                href="#notes"
                className="group flex items-center justify-between gap-6 border-b border-border py-7 transition-colors hover:bg-white/[.015]"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-pretty text-lg font-medium transition-colors group-hover:text-foreground md:text-xl">
                      {note.title}
                    </h3>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-amber/80">
                      {note.topic}
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    {note.read}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center border border-border transition-all duration-300 group-hover:border-amber group-hover:text-amber">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
