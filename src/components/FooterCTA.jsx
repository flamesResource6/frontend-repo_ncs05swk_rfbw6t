import React from 'react'
import { motion } from 'framer-motion'

const FooterCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60%_80%_at_50%_20%, rgba(59,130,246,0.25), transparent 60%)' }} />
      <div className="container relative mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white/5 p-10 ring-1 ring-white/10 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/15">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
                <span className="text-xs text-white/80">Let’s Build Something Bold</span>
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-white tracking-tight">Have a project in mind?</h3>
              <p className="mt-2 max-w-xl text-white/70">We blend cinematic design with robust engineering to deliver measurable outcomes.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-white shadow-lg shadow-cyan-500/20">
              <span>Start a Project</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterCTA
