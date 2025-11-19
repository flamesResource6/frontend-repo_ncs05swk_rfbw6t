import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Design', desc: 'Elegant interfaces with motion-first UX.' },
  { title: 'UI/UX', desc: 'Inclusive, accessible, research-driven.' },
  { title: '.NET Core CMS', desc: 'Robust, enterprise-grade content systems.' },
  { title: 'Accessibility', desc: 'WCAG 2.2 AA and beyond with Axessibily.' },
  { title: 'Corporate Projects', desc: 'Complex, multi-stakeholder digital programs.' },
  { title: 'Maintenance', desc: 'SLA-backed ongoing evolution and CRs.' }
]

const Services = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What We Do</h2>
          <p className="text-slate-600 mt-2">Design + Technology + Strategy üçlemesi merkeze alınsın</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px 120px at 10% 0%, rgba(59,130,246,0.08), transparent 60%)' }} />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="mt-1 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-slate-200 flex items-center justify-center"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
                </motion.div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <button className="rounded-lg bg-slate-900 text-white px-3 py-1.5">Explore</button>
                <button className="rounded-lg ring-1 ring-slate-300 px-3 py-1.5">Learn more</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
