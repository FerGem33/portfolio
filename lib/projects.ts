export type Accent = 'violet' | 'cyan' | 'blue' | 'amber' | 'green' | 'coral'

export type Project = {
  slug: string
  title: string
  kicker: string
  year: string
  summary: string
  description: string
  image: string
  accent: Accent
  stack: string[]
  metric?: { value: string; label: string }
  href?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'roceel',
    title: 'ROCEEL',
    kicker: 'Workforce & Operations Platform',
    year: '2024—25',
    summary:
      'An internal platform for an industrial-services company — attendance modeled as events, hierarchical RBAC, geofencing and facial verification, deployed on-premises.',
    description:
      'Event-oriented attendance, hierarchical permissions, and hardware integration for a real industrial operation.',
    image: '/images/roceel.png',
    accent: 'amber',
    stack: ['FastAPI', 'PostgreSQL', 'Next.js', 'Docker', 'ONNX', 'Cloudflare'],
    metric: { value: 'On-prem', label: 'production deployment' },
    featured: true,
  },
  {
    slug: 'horariostec',
    title: 'HorariosTec',
    kicker: 'Semester Planning Product',
    year: '2025',
    summary:
      'A web app that helps students plan their semester — schedules, teachers and class offerings, backed by scraping and data pipelines on Cloudflare infrastructure.',
    description:
      'A student-facing product on top of scraping, data processing, and an API.',
    image: '/images/horariostec.png',
    accent: 'coral',
    stack: ['Next.js', 'Cloudflare', 'Web Scraping', 'APIs', 'PostgreSQL'],
    metric: { value: 'Live', label: 'student-facing product' },
    featured: true,
  },
  {
    slug: 'neural-network',
    title: 'Neural Network From Scratch',
    kicker: 'Machine Learning Engine',
    year: '2024',
    summary:
      'Forward and backpropagation implemented by hand in NumPy — manual derivatives, cross-entropy loss, numerical-stability fixes, and weight persistence.',
    description:
      'Backprop and training loop built from first principles, no ML frameworks.',
    image: '/images/neural-net.png',
    accent: 'violet',
    stack: ['Python', 'NumPy', 'MNIST', 'Backprop'],
    metric: { value: '~95%', label: 'MNIST accuracy' },
    featured: true,
  },
  {
    slug: 'sph-fluid',
    title: 'SPH Fluid Simulator',
    kicker: 'Scientific Computing',
    year: '2024',
    summary:
      'A real-time smoothed-particle-hydrodynamics fluid simulation in C++ and OpenGL — thousands of particles, spatial partitioning, and a performance-driven solver.',
    description:
      'Numerical physics simulation with spatial partitioning for performance.',
    image: '/images/sph-fluid.png',
    accent: 'cyan',
    stack: ['C++', 'OpenGL', 'SPH', 'Spatial Hashing'],
    metric: { value: 'Real-time', label: 'thousands of particles' },
    featured: true,
  },
  {
    slug: 'bakery',
    title: 'Bakery Management System',
    kicker: 'Domain Modeling',
    year: '2023—24',
    summary:
      'Ingredients, recipes, production, inventory and sales — explored as a FastAPI web system and later as a PySide6 desktop app, a study in when local beats web.',
    description:
      'From web architecture to a desktop app — a study in deployment trade-offs.',
    image: '/images/bakery.png',
    accent: 'green',
    stack: ['FastAPI', 'PostgreSQL', 'React', 'PySide6', 'SQLite'],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const accentVar: Record<Accent, string> = {
  violet: 'var(--violet)',
  cyan: 'var(--cyan)',
  blue: 'var(--blue)',
  amber: 'var(--amber)',
  green: 'var(--green)',
  coral: 'var(--coral)',
}
