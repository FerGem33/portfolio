import { Server, Database, Cloud, Brain, Cpu } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const areas = [
  {
    icon: Server,
    title: 'Backend Engineering',
    accent: 'var(--blue)',
    items: [
      'API design',
      'Domain modeling',
      'Authentication & authorization',
      'Background processing',
      'Service architecture',
    ],
  },
  {
    icon: Database,
    title: 'Data & Databases',
    accent: 'var(--green)',
    items: [
      'PostgreSQL',
      'Relational modeling',
      'Transactions',
      'Migrations',
      'Query optimization',
    ],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    accent: 'var(--cyan)',
    items: ['Docker', 'Linux', 'Cloud & CI/CD', 'Deployment', 'On-premises'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    accent: 'var(--violet)',
    items: [
      'Neural networks',
      'NumPy',
      'Computer vision',
      'ONNX',
      'Model inference',
    ],
  },
  {
    icon: Cpu,
    title: 'Systems & Scientific Computing',
    accent: 'var(--amber)',
    items: [
      'C++',
      'Numerical methods',
      'Concurrency',
      'OpenGL & simulation',
      'Performance',
    ],
  },
]

export function TechnicalFocus() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading index="03" label="Technical focus" />

      <div className="mt-10 border-t border-border">
        {areas.map((area, i) => {
          const Icon = area.icon
          return (
            <Reveal
              key={area.title}
              delay={(i % 3) * 80}
              className=""
            >
              <div className="group grid gap-5 border-b border-border py-6 md:grid-cols-[36px_280px_1fr] md:items-start">
                <Icon className="h-5 w-5" style={{ color: area.accent }} />
                <h3 className="text-lg font-medium">{area.title}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="h-px w-3" style={{ backgroundColor: area.accent }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
