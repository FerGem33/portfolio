import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'lucide-react'

const fragments = [
  { src: '/images/neural-net.png', label: 'MNIST / NUMPY', className: 'left-[8%] top-[4%] w-[38%] -rotate-3' },
  { src: '/images/horariostec.png', label: 'PRODUCT / DATA', className: 'right-[1%] top-[18%] w-[44%] rotate-[5deg]' },
  { src: '/images/roceel.png', label: 'SYSTEMS / API', className: 'left-[15%] top-[46%] w-[43%] rotate-[2deg]' },
  { src: '/images/sph-fluid.png', label: 'SPH / C++', className: 'right-[11%] top-[55%] w-[43%] -rotate-[5deg]' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_40%,color-mix(in_oklch,var(--amber)_14%,transparent),transparent_40%),linear-gradient(110deg,#080909_5%,#0b0b09_65%,#111008)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,transparent_49.9%,color-mix(in_oklch,var(--amber)_18%,transparent)_50%,transparent_50.1%)] [background-size:120px_100%]" />

      <div className="mx-auto grid min-h-[min(900px,100svh)] max-w-7xl items-center gap-12 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[.84fr_1.16fr] lg:gap-3 lg:pt-20">
        <div className="relative z-10 lg:pb-6">
          <p className="eyebrow animate-rise">Software engineer</p>
          <h1 className="mt-4 max-w-xl font-serif text-[3.45rem] leading-[.91] tracking-[-.035em] sm:text-7xl lg:text-[5.25rem]">
            <span className="block animate-rise [animation-delay:70ms]">I design systems</span>
            <span className="block animate-rise [animation-delay:140ms]">that solve</span>
            <span className="block animate-rise italic text-amber [animation-delay:210ms]">real problems.</span>
          </h1>
          <p className="mt-7 max-w-md animate-rise text-pretty leading-relaxed text-muted-foreground [animation-delay:290ms]">
            Backend engineering, machine learning, infrastructure, databases, and scientific computing.
          </p>
          <div className="mt-8 flex animate-rise flex-wrap items-center gap-x-7 gap-y-4 text-sm [animation-delay:360ms]">
            <Link href="/work" className="group inline-flex items-center gap-2 bg-amber px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-foreground">
              Explore my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#contact" className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-amber">
              View résumé <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
          <p className="mt-7 font-serif text-lg italic text-amber/90">Curious by nature. Builder by choice.</p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[650px] animate-rise [animation-delay:180ms]" aria-label="A collage of Fernando López's engineering work">
          <svg className="pointer-events-none absolute inset-[7%] h-[86%] w-[90%] overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M 5 22 C 36 5, 40 53, 54 45 S 74 16, 95 39 S 58 88, 25 78" fill="none" stroke="var(--amber)" strokeOpacity=".7" strokeWidth=".35" className="gold-flow" />
            <path d="M 6 21 C 37 4, 41 52, 54 44 S 74 15, 95 38" fill="none" stroke="var(--amber)" strokeOpacity=".2" strokeWidth="2" filter="blur(2px)" />
            <circle cx="54" cy="45" r="1.2" fill="var(--amber)" /><circle cx="25" cy="78" r="1.2" fill="var(--amber)" />
          </svg>
          {fragments.map((fragment, i) => (
            <div key={fragment.label} className={`group absolute overflow-hidden border border-white/10 bg-[#090a09] shadow-[0_20px_70px_-28px_rgba(0,0,0,.95)] ${fragment.className} ${i % 2 ? 'animate-floaty [animation-delay:-3s]' : 'animate-floaty'}`}>
              <Image src={fragment.src} alt="" width={500} height={500} className="aspect-square w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute bottom-2 left-2 bg-[#090a09]/85 px-2 py-1 font-mono text-[8px] tracking-[.18em] text-amber backdrop-blur">{fragment.label}</span>
            </div>
          ))}
          <div className="absolute bottom-[4%] left-[42%] h-12 w-12 rounded-full border border-amber/60 bg-[#17130b]/80 shadow-[0_0_30px_color-mix(in_oklch,var(--amber)_45%,transparent)]" />
        </div>
      </div>
    </section>
  )
}
