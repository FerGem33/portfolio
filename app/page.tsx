import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { SelectedWork } from '@/components/sections/selected-work'
import { Competitions } from '@/components/sections/competitions'
import { TechnicalFocus } from '@/components/sections/technical-focus'
import { Education } from '@/components/sections/education'
import { About } from '@/components/sections/about'
import { Notes } from '@/components/sections/notes'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
        <Competitions />
        <TechnicalFocus />
        <About />
        <Education />
        <Notes />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
