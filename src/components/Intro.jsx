import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Globe, Zap } from 'lucide-react'
import introphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import introphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import introphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import introphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const Intro = () => {
  const highlights = [
    { label: 'Talent Network', value: '350+ creators', icon: <Star className="text-emerald-500" size={20} /> },
    { label: 'Campaigns', value: '120+ global', icon: <Globe className="text-emerald-500" size={20} /> },
    { label: 'Performance', value: '3.2x growth', icon: <Zap className="text-emerald-500" size={20} /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="intro" className="py-24 md:py-32 bg-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              The Studio
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              We define the <span className="text-emerald-500 italic">aesthetic</span> of tomorrow.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl">
              Scenic is a modern creative powerhouse bridging the gap between curated talent and top-tier brands. We don't just run campaigns; we craft editorial-grade stories that move culture.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {highlights.map((item, index) => (
                <div key={item.label} className="group p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                  <div className="mb-4 p-2 bg-white rounded-xl shadow-sm w-fit group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 group">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-colors">
                View Case Studies
              </button>
            </motion.div>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 group">
                <img src={introphoto1} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden aspect-square bg-slate-100 group">
                <img src={introphoto3} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
            <div className="space-y-4 pt-12">
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden aspect-square bg-slate-100 group">
                <img src={introphoto2} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 group">
                <img src={introphoto4} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
