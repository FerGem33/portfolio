import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const social = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:hello@fernandolopez.dev' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-20">
        <div>
          <p className="font-serif text-3xl leading-tight tracking-tight text-balance md:text-4xl">
            Let&apos;s build something that
            <span className="text-muted-foreground"> actually works underneath.</span>
          </p>
          <a
            href="mailto:hello@fernandolopez.dev"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            hello@fernandolopez.dev
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
            <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground">
              Work
            </Link>
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/#notes" className="text-sm text-muted-foreground hover:text-foreground">
              Notes
            </Link>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Fernando López · Designed & built from Mexico.
          </p>
        </div>
      </div>
    </footer>
  )
}
