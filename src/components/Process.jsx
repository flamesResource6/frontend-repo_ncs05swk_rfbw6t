import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'Goals, constraints, and audience.' },
  { title: 'Design', desc: 'Information architecture & visual language.' },
  { title: 'Develop', desc: 'Accessible, performant, scalable.' },
  { title: 'Deliver', desc: 'QA, launch, and iterative improvement.' }
]

const Process = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Process</h2>
          <p className="text-sm text-slate-500">Step-by-step animated journey</p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-[800px] gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex-1 rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_theme(colors.cyan.400)]" />
                  <h3 className="text-lg font-medium">{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-600">{s.desc}</p>

                <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400/50 via-violet-500/50 to-fuchsia-500/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
