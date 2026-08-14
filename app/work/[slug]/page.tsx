import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CaseFlow } from '@/components/case-flow'
import { projects, getProject, accentVar } from '@/lib/projects'
import { getCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Work — Fernando López' }
  return {
    title: `${project.title} — Fernando López`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  const study = getCaseStudy(slug)
  if (!project || !study) notFound()

  const accent = accentVar[project.accent]
  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
            style={{
              background: `radial-gradient(700px 320px at 50% -10%, color-mix(in oklch, ${accent} 22%, transparent), transparent)`,
            }}
          />
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {project.kicker}
              </span>
            </div>

            <h1 className="mt-5 text-pretty font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {study.intro}
            </p>

            <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
                  Role
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{study.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
                  Timeframe
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{study.timeframe}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
                  Stack
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">
                  {project.stack.join(' · ')}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Primary visual */}
        <section className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
          <Reveal>
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border"
              style={{ boxShadow: `0 50px 120px -60px ${accent}` }}
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} — primary visual`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </Reveal>
        </section>

        {/* Highlights */}
        <section className="mx-auto mt-16 max-w-5xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {study.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card/40 p-5">
                  <p
                    className="font-serif text-3xl tracking-tight"
                    style={{ color: accent }}
                  >
                    {h.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {h.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Diagram */}
        {study.diagram && (
          <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card/30 p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {study.diagram.title}
                  </h2>
                </div>
                <div className="mt-8">
                  <CaseFlow steps={study.diagram.steps ?? []} accent={accent} />
                </div>
                {study.diagram.caption && (
                  <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {study.diagram.caption}
                  </p>
                )}
              </div>
            </Reveal>
          </section>
        )}

        {/* Sections */}
        <section className="mx-auto mt-20 max-w-3xl px-5 md:px-8">
          <div className="flex flex-col gap-14">
            {study.sections.map((section) => (
              <Reveal key={section.heading}>
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                  <h3 className="font-serif text-xl leading-snug tracking-tight text-foreground/90 md:sticky md:top-28 md:self-start">
                    {section.heading}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {section.body.map((p, i) => (
                      <p key={i} className="leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Learned + Next */}
        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  What I learned
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {study.learned.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Next steps
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {study.next.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Next project */}
        <section className="mx-auto mt-24 max-w-6xl px-5 md:px-8">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-4 rounded-3xl border border-border bg-card/30 p-8 transition-colors hover:bg-card md:flex-row md:items-center md:justify-between md:p-12"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Next project
              </span>
              <p className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
                {next.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{next.kicker}</p>
            </div>
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:scale-110"
              style={{ color: accentVar[next.accent] }}
            >
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
