import { ArrowRight, FileText, Code2, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const actions = [
  {
    label: 'Résumé',
    sub: 'PDF · one page',
    href: '#',
    icon: FileText,
    accent: 'var(--amber)',
  },
  {
    label: 'GitHub',
    sub: 'Code & experiments',
    href: 'https://github.com',
    icon: Code2,
    accent: 'var(--violet)',
  },
  {
    label: 'Email',
    sub: 'hello@fernandolopez.dev',
    href: 'mailto:hello@fernandolopez.dev',
    icon: Mail,
    accent: 'var(--cyan)',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground/60">08</span>
          <span className="h-px w-8 bg-border" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </span>
        </div>
      </Reveal>

      <Reveal className="mt-8 max-w-3xl">
        <h2 className="text-pretty font-serif text-4xl leading-[1.03] tracking-tight md:text-6xl">
          Let&apos;s build something <span className="italic text-amber">meaningful.</span>
        </h2>
      </Reveal>

      <p className="mt-5 max-w-xl text-muted-foreground">I&apos;m always open to collaboration, interesting problems and new ideas.</p><div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
        {actions.map((a, i) => {
          const Icon = a.icon
          return (
            <Reveal key={a.label} delay={i * 80}>
              <a
                href={a.href}
                target={a.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden bg-background p-6 transition-all duration-300 hover:bg-card"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: a.accent }}
                />
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `color-mix(in oklch, ${a.accent} 40%, transparent)`,
                      color: a.accent,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-amber" />
                </div>
                <div className="mt-10">
                  <p className="text-lg font-medium">{a.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.sub}</p>
                </div>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
