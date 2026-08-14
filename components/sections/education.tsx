import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const topics = [
  'Algorithms',
  'Data structures',
  'Databases',
  'Calculus',
  'Linear algebra',
  'Vector calculus',
  'Probability & statistics',
]

const exploring = [
  'RAG systems',
  'AI study companion',
  'Automatic differentiation',
  'Redis-like store',
  'Task queues',
  'Storage engines',
  'Rust',
  'ML pipelines',
]

export function Education() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading index="05" label="Education" />
          <Reveal className="mt-8"><p className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">Software engineering student<span className="mt-2 block text-lg font-normal not-italic text-muted-foreground">Computer-science-oriented coursework</span></p></Reveal>
          <Reveal delay={100} className="mt-8">
            <p className="text-sm text-muted-foreground">
              Coursework with a strong computer-science core:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 border-l border-amber/30 pl-5 sm:grid-cols-3">
              {topics.map((t) => (
                <li
                  key={t}
                  className="text-sm text-foreground/80 before:mr-2 before:text-amber before:content-['↗']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground/60">06</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Currently exploring · in progress
              </span>
            </div>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Ideas and experiments I&apos;m poking at right now — not finished
              projects, just directions I find interesting.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 border-y border-border sm:grid-cols-3">
              {exploring.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 py-3.5 transition-colors hover:text-amber"
                >
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground/80 transition-transform duration-300 group-hover:translate-x-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
