import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import bgvideo from '../assets/video.mp4'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'HOME', href: '#home' },
        { label: 'STUDIO', href: '#intro' },
        { label: 'OUR PEOPLE', href: '#people' },
        { label: "LET'S TALK", href: '#contact' }
    ]

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + (i * 0.2),
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    }

    return (
        <div className="relative">
            <div className="relative h-screen w-full overflow-hidden bg-slate-950">
                {/* Background Video & Gradient */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover brightness-[0.4] scale-105"
                    >
                        <source src={bgvideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-emerald-950/50"></div>
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
                    <div className="hero-orb top-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/10 blur-[100px]" />
                    <div className="hero-orb bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-500/10 blur-[100px]" />
                </div>

                <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
                    : 'py-8 bg-transparent'
                    }`}>
                    <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl md:text-3xl font-bold tracking-tighter text-white cursor-pointer group"
                        >
                            SCENIC<span className="text-emerald-500 group-hover:animate-pulse">.</span>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="text-xs font-semibold tracking-[0.2em] text-white/70 hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </nav>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-black z-[100] flex flex-col p-10"
                        >
                            <div className="flex justify-between items-center mb-20">
                                <span className="text-2xl font-bold text-white">SCENIC<span className="text-emerald-500">.</span></span>
                                <button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32} /></button>
                            </div>
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-light text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-6">
                                <Instagram className="text-emerald-500 hover:text-white cursor-pointer transition-colors" />
                                <Twitter className="text-emerald-500 hover:text-white cursor-pointer transition-colors" />
                                <Linkedin className="text-emerald-500 hover:text-white cursor-pointer transition-colors" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div id="home" className="relative z-20 h-full flex flex-col justify-center px-6">
                    <div className="max-w-5xl mx-auto w-full">
                        <motion.h1
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={heroVariants}
                            className="text-5xl md:text-7xl lg:text-9xl text-white font-bold leading-[0.95] tracking-tight mb-8 text-left"
                        >
                            THE <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-emerald-500 inline-block"
                            >FUTURE</motion.span> <br /> OF CONTENT
                        </motion.h1>
                        <motion.p
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={heroVariants}
                            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mb-12 tracking-wide text-left"
                        >
                            Scenic is a boutique creative studio specializing in luxury brand narratives and high-end talent management.
                        </motion.p>
                        <div className="flex justify-start">
                            <Link to="/start" className="inline-block">
                                <motion.button
                                    custom={2}
                                    initial="hidden"
                                    animate="visible"
                                    variants={heroVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-bold transition-all duration-300"
                                >
                                    START A PROJECT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="text-[10px] tracking-[0.3em] text-white/30 uppercase"
                    >
                        Scroll to explore
                    </motion.span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
