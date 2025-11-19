import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    title: 'Neon Logistics Platform',
    tag: 'Enterprise UI',
    video: 'https://cdn.coverr.co/videos/coverr-lights-on-people-2990/1080p.mp4',
    palette: ['#00E5FF', '#7C3AED', '#0EA5E9']
  },
  {
    title: 'Quantum Banking',
    tag: 'Accessibility First',
    video: 'https://cdn.coverr.co/videos/coverr-abstract-dots-1812/1080p.mp4',
    palette: ['#22d3ee', '#a78bfa', '#14b8a6']
  },
  {
    title: 'Axial Health Suite',
    tag: 'Design System',
    video: 'https://cdn.coverr.co/videos/coverr-the-lights-are-spinning-3263/1080p.mp4',
    palette: ['#38bdf8', '#8b5cf6', '#06b6d4']
  }
]

const CaseCarousel = () => {
  return (
    <section id="work" className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="text-sm text-slate-500">Magnetic scroll, 3D tilt, video previews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(2,6,23,0.1)] bg-slate-50"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={c.video}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs uppercase tracking-widest text-white/80">{c.tag}</div>
                <div className="mt-1 text-lg font-medium">{c.title}</div>
                <div className="mt-3 flex gap-2">
                  {c.palette.map((p, i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p }} />
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseCarousel
