import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCover } from '@/components/project-cover'
import { Reveal } from '@/components/reveal'
import { projects, accentVar } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work — Fernando López',
  description:
    'Selected engineering projects: platforms, machine learning, scientific computing, and domain-modeling systems.',
}

const experiments = [
  'Responsive event invitation websites',
  'Smaller backend applications',
  'Learning projects & prototypes',
  'Algorithm & data-structure practice',
]

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-32 md:pt-40">
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Work · 2023 — 2025
            </span>
            <h1 className="mt-5 max-w-4xl text-pretty font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
              Systems, models, and simulations I&apos;ve built.
            </h1>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              A mix of real production platforms and projects built to understand
              something deeply. Each one is shown visually first — the engineering
              lives inside the case study.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-5 md:mt-24 md:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <article className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
                  <div className={i % 2 ? 'md:order-2 md:col-span-7' : 'md:col-span-7'}>
                    <Link href={`/work/${project.slug}`}>
                      <ProjectCover project={project} priority={i === 0} />
                    </Link>
                  </div>
                  <div className={i % 2 ? 'md:order-1 md:col-span-5' : 'md:col-span-5'}>
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: accentVar[project.accent] }}
                      />
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {project.kicker} · {project.year}
                      </span>
                    </div>
                    <h2 className="mt-4 font-serif text-4xl leading-none tracking-tight md:text-5xl">
                      {project.title}
                    </h2>
                    <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="relative">
                        View case study
                        <span
                          className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover/link:w-full"
                          style={{ backgroundColor: accentVar[project.accent] }}
                        />
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                More work & experiments
              </span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {experiments.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-card/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
