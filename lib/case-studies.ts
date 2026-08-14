export type CaseSection = {
  heading: string
  body: string[]
}

export type Diagram = {
  kind: 'flow' | 'timeline' | 'matrix' | 'hierarchy'
  title: string
  caption?: string
  // flow / timeline / hierarchy nodes
  steps?: string[]
}

export type CaseStudy = {
  slug: string
  role: string
  timeframe: string
  intro: string
  highlights: { value: string; label: string }[]
  diagram?: Diagram
  sections: CaseSection[]
  learned: string[]
  next: string[]
}

export const caseStudies: Record<string, CaseStudy> = {
  roceel: {
    slug: 'roceel',
    role: 'Backend, ML integration & infrastructure',
    timeframe: '2024 — 2025',
    intro:
      'ROCEEL is an internal platform for an industrial-services company. It handles the parts of an operation that are usually messy and manual — who is working, where, on what, and with which permissions — and turns them into a coherent, auditable system deployed on the company\u2019s own hardware.',
    highlights: [
      { value: 'On-prem', label: 'Deployed on company hardware' },
      { value: 'Event-based', label: 'Attendance model' },
      { value: 'RBAC', label: 'Hierarchical permissions' },
      { value: 'Face + geo', label: 'Verified check-ins' },
    ],
    diagram: {
      kind: 'flow',
      title: 'System shape',
      caption: 'A request travels from the field through verification into the domain and back out as reports.',
      steps: [
        'Field client (QR · camera · GPS)',
        'FastAPI + Auth / RBAC',
        'Domain services (attendance, shifts, vacations)',
        'PostgreSQL + ONNX face verification',
        'Approvals · PDF generation · reports',
      ],
    },
    sections: [
      {
        heading: 'What I built',
        body: [
          'A FastAPI backend with a Next.js front end, PostgreSQL for the core domain, and ONNX Runtime + InsightFace for on-device facial verification, all packaged in Docker and deployed on-premises behind Cloudflare.',
          'The system covers attendance, shifts, event-based time tracking, geofencing, QR workflows, vacation requests and approvals, and PDF generation — with a permission model that mirrors the real org chart.',
        ],
      },
      {
        heading: 'The problem',
        body: [
          'Attendance in the field is rarely a clean "in" and "out". People move between work, meals, transportation, and interruptions, and the company needed an honest record of all of it — one that could survive audits and payroll disputes.',
          'It also needed to run without depending on a stable internet connection to a third party, which pushed the whole thing toward an on-premises deployment.',
        ],
      },
      {
        heading: 'The key engineering decision',
        body: [
          'Instead of modeling attendance as a single check-in / check-out pair, I moved it to an event-oriented model. Each meaningful transition — start work, break for a meal, travel, interruption — is its own timestamped event.',
          'This made the domain far more expressive: a day becomes a sequence of typed events that can be validated, aggregated, and replayed, rather than a rigid pair of timestamps that never matched reality.',
        ],
      },
      {
        heading: 'Verification & hardware',
        body: [
          'Check-ins combine geofencing with facial verification running through ONNX Runtime, so a record ties a person to a place and a moment. Integrating with real cameras and field devices was its own challenge — handling imperfect input without making the flow painful for workers.',
        ],
      },
      {
        heading: 'Permissions',
        body: [
          'The permission system is hierarchical and mirrors the company structure, so a supervisor can act within their branch of the tree without being handed global access. Getting RBAC to feel natural — rather than a wall of checkboxes — was a big part of the work.',
        ],
      },
    ],
    learned: [
      'Modeling a domain around events instead of states unlocks expressiveness you did not know you needed.',
      'On-prem deployment forces you to be honest about operational realities — updates, backups, and failure modes.',
      'ML in production is mostly about handling messy input gracefully, not the model itself.',
    ],
    next: [
      'Tighten the offline story for field devices.',
      'Add richer analytics on top of the event stream.',
      'Formalize the approval workflows as an explicit state machine.',
    ],
  },
  horariostec: {
    slug: 'horariostec',
    role: 'Full-stack & data pipelines',
    timeframe: '2025',
    intro:
      'HorariosTec helps students plan their semester. On the surface it is a fast, friendly schedule planner; underneath it is a scraping and data pipeline that keeps course, teacher, and offering data fresh.',
    highlights: [
      { value: 'Live', label: 'Student-facing product' },
      { value: 'Scraper', label: 'Data collection pipeline' },
      { value: 'Cloudflare', label: 'Edge infrastructure' },
    ],
    diagram: {
      kind: 'flow',
      title: 'Data pipeline',
      caption: 'Raw institutional data becomes a clean API that students actually enjoy using.',
      steps: [
        'Scraper (course offerings)',
        'Processing & normalization',
        'Database',
        'API',
        'Student planner UI',
      ],
    },
    sections: [
      {
        heading: 'What I built',
        body: [
          'A Next.js planner that lets students assemble and compare schedules, backed by an API over a database that is continuously fed by scraping and data-processing workflows on Cloudflare.',
        ],
      },
      {
        heading: 'The problem',
        body: [
          'The information students need to plan a semester is scattered and awkward to use. The goal was to collect it reliably, clean it into a consistent shape, and put a genuinely pleasant interface on top.',
        ],
      },
      {
        heading: 'Show the product, reveal the engineering',
        body: [
          'The front end looks like a polished consumer product on purpose — but the interesting part is the pipeline that keeps it accurate: scrape, normalize, store, serve.',
        ],
      },
    ],
    learned: [
      'A great data product is mostly invisible plumbing under a simple interface.',
      'Scraping is a maintenance commitment, not a one-off script.',
    ],
    next: ['Add smarter conflict detection and recommendations.', 'Expand coverage and history.'],
  },
  'neural-network': {
    slug: 'neural-network',
    role: 'Machine learning from scratch',
    timeframe: '2024',
    intro:
      'A neural network implemented by hand in Python and NumPy — no ML frameworks. The point was to understand exactly what backpropagation is doing, not to reach for an abstraction.',
    highlights: [
      { value: '~95%', label: 'MNIST accuracy' },
      { value: 'NumPy', label: 'No frameworks' },
      { value: 'Manual', label: 'Derivatives & backprop' },
    ],
    diagram: {
      kind: 'flow',
      title: 'Training loop',
      caption: 'Every arrow here was implemented and differentiated by hand.',
      steps: [
        'Forward pass',
        'Cross-entropy loss',
        'Backpropagation',
        'Gradient update',
        'Repeat over batches',
      ],
    },
    sections: [
      {
        heading: 'What I built',
        body: [
          'Forward propagation, activation functions, manually derived gradients, batch training, cross-entropy loss, numerical-stability fixes, and weight persistence — all written from first principles.',
          'It reaches roughly 95% accuracy on MNIST, which was enough to prove the implementation was correct end to end.',
        ],
      },
      {
        heading: 'Why from scratch',
        body: [
          'Frameworks make it easy to train a network without understanding it. Deriving the derivatives by hand and watching the loss actually go down is a very different kind of knowledge.',
        ],
      },
      {
        heading: 'Where it is going',
        body: [
          'I am rebuilding it into a proper educational engine: optimizers, automatic differentiation, CNNs, better initialization, gradient checking, and benchmarks against PyTorch.',
        ],
      },
    ],
    learned: [
      'Numerical stability is not optional — softmax and log-sum-exp will humble you.',
      'Understanding backprop by hand makes every framework afterwards feel obvious.',
    ],
    next: ['Automatic differentiation.', 'Convolutional layers.', 'Benchmark against PyTorch.'],
  },
  'sph-fluid': {
    slug: 'sph-fluid',
    role: 'Scientific computing',
    timeframe: '2024',
    intro:
      'A real-time fluid simulation in C++ and OpenGL using Smoothed Particle Hydrodynamics — thousands of interacting particles solved fast enough to watch them flow.',
    highlights: [
      { value: 'Real-time', label: 'Thousands of particles' },
      { value: 'C++ · GL', label: 'Native rendering' },
      { value: 'Spatial hash', label: 'Neighbor search' },
    ],
    diagram: {
      kind: 'flow',
      title: 'Simulation step',
      caption: 'The spatial grid is what makes neighbor search cheap enough for real time.',
      steps: [
        'Spatial partitioning',
        'Density & pressure',
        'Forces',
        'Integrate motion',
        'Render particles',
      ],
    },
    sections: [
      {
        heading: 'What I built',
        body: [
          'An SPH solver that computes density and pressure fields across a particle system, applies forces, integrates motion, and renders the result in OpenGL — all in real time.',
          'The performance came from spatial partitioning: without a grid to limit neighbor search, the whole thing collapses under its own complexity.',
        ],
      },
      {
        heading: 'The problem',
        body: [
          'Fluid is expensive. Every particle interacts with its neighbors, and naive approaches are quadratic. Keeping it interactive meant being deliberate about data structures and memory access.',
        ],
      },
    ],
    learned: [
      'Data layout and cache behavior matter as much as the algorithm.',
      'A good spatial structure turns an impossible problem into an interactive one.',
    ],
    next: ['Surface reconstruction for a real fluid look.', 'GPU compute for higher particle counts.'],
  },
  bakery: {
    slug: 'bakery',
    role: 'Domain modeling & architecture',
    timeframe: '2023 — 2024',
    intro:
      'A management system for a bakery — ingredients, recipes, production, inventory, orders, sales, and reports — that became an experiment in choosing the right architecture for the job.',
    highlights: [
      { value: 'Web → desktop', label: 'Two architectures' },
      { value: 'Full domain', label: 'Ingredients to sales' },
    ],
    diagram: {
      kind: 'flow',
      title: 'Domain flow',
      steps: ['Ingredients', 'Recipes', 'Production', 'Inventory', 'Sales'],
    },
    sections: [
      {
        heading: 'What I built',
        body: [
          'First as a FastAPI + PostgreSQL + React web system, then rebuilt as a PySide6 + SQLite desktop application — the same domain expressed two very different ways.',
        ],
      },
      {
        heading: 'The interesting question',
        body: [
          'When does a local desktop app make more sense than a web app? For a single-location business with no need for remote access, a desktop app removed a whole class of infrastructure and gave a faster, simpler experience.',
        ],
      },
    ],
    learned: [
      'The best architecture depends on how software is actually used, not on defaults.',
      'Modeling the domain well pays off no matter the delivery target.',
    ],
    next: ['Revisit sync if multi-location ever becomes real.'],
  },
}

export function getCaseStudy(slug: string) {
  return caseStudies[slug]
}
