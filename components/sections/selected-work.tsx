import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, accentVar } from '@/lib/projects'
import { ProjectCover } from '@/components/project-cover'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading index="01" label="Selected work" />
        <Link href="/work" className="hidden items-center gap-2 text-sm text-amber transition-colors hover:text-foreground md:inline-flex">View all projects <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <article className="group h-full border border-border bg-[linear-gradient(135deg,rgba(255,255,255,.018),transparent)] p-2 transition-colors hover:border-white/25">
              <Link href={`/work/${project.slug}`} aria-label={project.title}><ProjectCover project={project} priority={i === 0} className="border-0 rounded-none" /></Link>
              <div className="px-2 pb-3 pt-5">
                <p className="text-[10px] font-medium uppercase tracking-[.14em]" style={{ color: accentVar[project.accent] }}>{project.kicker}</p>
                <h3 className="mt-2 font-serif text-[1.55rem] leading-[.98] tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <Link href={`/work/${project.slug}`} className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors group-hover:text-amber">{project.kicker.includes('Machine') ? 'Machine Learning' : project.kicker.includes('Scientific') ? 'Scientific Computing' : project.kicker.includes('Semester') ? 'Product / Data System' : 'Backend System'} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Link href="/work" className="mt-8 inline-flex items-center gap-2 text-sm text-amber md:hidden">View all projects <ArrowRight className="h-4 w-4" /></Link>
    </section>
  )
}
