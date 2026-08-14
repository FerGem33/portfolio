'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/#about' },
  { label: 'Notes', href: '/#notes' },
  { label: 'Résumé', href: '/#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8',
          scrolled ? 'mt-2 py-2.5' : 'mt-4 py-3',
        )}
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-x-3 inset-y-0 -z-10 border-b transition-all duration-500 md:inset-x-6',
            scrolled
              ? 'border-border bg-background/70 backdrop-blur-xl'
              : 'border-transparent bg-transparent',
          )}
        />
        <Link
          href="/"
          className="group text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span>fernando.lopez<span className="text-amber">.</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-amber"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 backdrop-blur md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-1 overflow-hidden rounded-2xl border border-border bg-background/90 p-2 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex items-center justify-between rounded-lg bg-foreground px-4 py-3 text-base font-medium text-primary-foreground"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
