import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass gradient veil so text remains readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(20,17,44,0.55),rgba(7,9,19,0.85))]"></div>

      {/* Floating particles (soft) */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.8, 0], y: [0, -60, 0] }}
            transition={{ duration: 6 + i * 0.2, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute size-1.5 rounded-full"
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 37) % 100}%`,
              background:
                'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.9), rgba(59, 130, 246, 0.2) 60%, transparent)',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_theme(colors.cyan.400)]" />
              <span className="text-xs uppercase tracking-widest text-cyan-100/90">Design + Technology + Strategy</span>
            </motion.div>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white">
              Madebycat Interactive
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
              A high-end digital studio crafting accessible, enterprise-grade web experiences. Istanbul ↔ Cambridge.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-white shadow-lg shadow-cyan-500/20"
              >
                <span>View Work</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
              >
                <span>Let’s Build Together</span>
              </motion.a>
            </div>

            <div className="mt-10 text-sm text-white/60">
              Expert in Web Design, UI/UX, .NET Core CMS, Accessibility, Corporate Projects, and Enterprise-Level Maintenance
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
