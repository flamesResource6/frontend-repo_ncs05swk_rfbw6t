import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseCarousel from './components/CaseCarousel'
import Process from './components/Process'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-slate-200 backdrop-blur-lg">
            <a href="#" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
              <span className="font-semibold tracking-tight">Madebycat Interactive</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a href="#work" className="hover:text-slate-900">Work</a>
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#process" className="hover:text-slate-900">Process</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <a href="#" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white">
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <div id="services"><Services /></div>
        <CaseCarousel />
        <div id="process"><Process /></div>
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
