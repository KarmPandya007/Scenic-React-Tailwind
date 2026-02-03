import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, Send, CheckCircle2, Globe, Zap, Sparkles, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const StartProject = () => {
    const [step, setStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        timeline: '',
        budget: '',
        name: '',
        email: ''
    })

    const totalSteps = 4

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1)
        else setIsSubmitted(true)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const progress = (step / totalSteps) * 100

    const pageVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-950 flex shadow-2xl items-center justify-center p-6 overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] animate-pulse delay-700" />
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 text-center max-w-2xl bg-white/5 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] border border-white/10"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                    >
                        <CheckCircle2 size={48} className="text-black" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Iconic things take <span className="text-emerald-500 italic">time.</span></h2>
                    <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                        Your vision has been received. Our team is already dissecting the details and we'll revert back to you within 24 hours. Get ready to move culture.
                    </p>
                    <Link to="/">
                        <button className="px-10 py-5 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all transform hover:scale-105">
                            Back to Home
                        </button>
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-50" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[150px]"
                />
            </div>

            {/* Header */}
            <header className="relative z-20 p-8 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter group">
                    SCENIC<span className="text-emerald-500 group-hover:animate-pulse">.</span>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">Step {step} of {totalSteps}</div>
                    <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </header>

            {/* Main Form Area */}
            <main className="flex-grow flex items-center justify-center p-6 relative z-10">
                <div className="max-w-4xl w-full translate-y-[-5%]">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold tracking-widest uppercase">
                                        <Sparkles size={14} /> The Foundation
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                                        Let’s start with the <span className="text-emerald-500 italic">vision.</span>
                                    </h1>
                                </div>
                                <div className="space-y-8">
                                    <div className="relative group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4 ml-1 transition-colors group-focus-within:text-emerald-500">Project Name</label>
                                        <input
                                            type="text"
                                            name="projectName"
                                            value={formData.projectName}
                                            onChange={handleChange}
                                            placeholder="What's the name of your masterpiece?"
                                            className="w-full bg-transparent border-b-2 border-white/10 text-3xl md:text-4xl py-6 outline-none focus:border-emerald-500 transition-all font-light placeholder:text-white/10"
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold tracking-widest uppercase">
                                        <Globe size={14} /> Context
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                                        Tell us the <span className="text-emerald-500 italic">story.</span>
                                    </h1>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4 ml-1 transition-colors group-focus-within:text-emerald-500">Project Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Describe your goals, aesthetic, and vibe..."
                                            className="w-full bg-transparent border-b-2 border-white/10 text-2xl md:text-3xl py-4 outline-none focus:border-emerald-500 transition-all font-light resize-none placeholder:text-white/10"
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold tracking-widest uppercase">
                                        <Zap size={14} /> Execution
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                                        When do we <span className="text-emerald-500 italic">drop?</span>
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {['1-3 Months', '3-6 Months', 'Always On'].map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => setFormData({ ...formData, timeline: option })}
                                            className={`p-8 rounded-3xl border-2 transition-all cursor-pointer group ${formData.timeline === option
                                                    ? 'bg-emerald-500 border-emerald-500 text-black'
                                                    : 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                                                }`}
                                        >
                                            <div className="text-xl font-bold mb-2 uppercase tracking-wide">{option}</div>
                                            <div className={`text-xs ${formData.timeline === option ? 'text-black/60' : 'text-slate-500'} font-bold`}>Timeline</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                variants={pageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold tracking-widest uppercase">
                                        <Rocket size={14} /> Final Touch
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                                        One last <span className="text-emerald-500 italic">thing.</span>
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4 ml-1 transition-colors group-focus-within:text-emerald-500">Your Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-transparent border-b-2 border-white/10 text-2xl py-4 outline-none focus:border-emerald-500 transition-all font-light placeholder:text-white/10"
                                            autoFocus
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4 ml-1 transition-colors group-focus-within:text-emerald-500">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent border-b-2 border-white/10 text-2xl py-4 outline-none focus:border-emerald-500 transition-all font-light placeholder:text-white/10"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer className="relative z-20 p-8 md:p-12 flex justify-between items-center bg-gradient-to-t from-slate-950 to-transparent">
                <button
                    onClick={handleBack}
                    className={`flex items-center gap-2 text-slate-500 font-bold hover:text-white transition-colors ${step === 1 ? 'invisible' : 'visible'}`}
                >
                    <ChevronLeft size={20} /> Back
                </button>

                <button
                    onClick={handleNext}
                    disabled={step === 1 && !formData.projectName}
                    className="flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-full font-bold hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                    {step === totalSteps ? (
                        <>Complete Inquiry <Send size={20} /></>
                    ) : (
                        <>Next Stage <ArrowRight size={20} /></>
                    )}
                </button>
            </footer>
        </div>
    )
}

export default StartProject
