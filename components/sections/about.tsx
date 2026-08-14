import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const loop = ['Understand', 'Implement', 'Measure', 'Improve']

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <SectionHeading index="04" label="About me" />
            <Reveal className="mt-8">
              <p className="text-pretty font-serif text-2xl leading-snug tracking-tight md:text-3xl">
                I like learning systems from first principles — and I care about the
                boundary between code, mathematics, data, and real-world constraints.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-6 max-w-xl">
              <p className="leading-relaxed text-muted-foreground">
                I enjoy understanding systems from first principles and turning ideas into useful, reliable software.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Outside software, music matters to me — I play piano, which is
                probably where the taste for structure and practice comes from.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={80}>
              <div className="border-l border-amber/40 pl-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  How I work
                </p>
                <ol className="mt-6 flex flex-col gap-3">
                  {loop.map((step, i) => (
                    <li key={step} className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted-foreground/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-2xl tracking-tight">
                        {step}
                      </span>
                      {i < loop.length - 1 && (
                        <span className="ml-auto h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                  A loop I keep coming back to — understand the problem deeply, build
                  the simplest thing that works, measure it honestly, then make it
                  better.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
