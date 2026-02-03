import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import bgvideo from '../assets/video.mp4'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const reduceMotion = useReducedMotion()

    return (
        <div>
            <div className="relative h-screen w-full overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 brightness-[0.35] w-full h-full object-cover z-[-2] scale-105">
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-900/30 z-[-1]"></div>
                <div className="pointer-events-none absolute inset-0">
                    {['top-10 left-10', 'bottom-20 right-16', 'top-1/3 right-1/4'].map((position) => (
                        <div key={position} className={`hero-orb ${position}`} />
                    ))}
                </div>
                <div
                    className="nav flex flex-row justify-between items-center p-4 px-4 md:px-20 text-white sticky top-0 z-50 shadow-xl bg-white/10 backdrop-blur-md">
                    <div className="logo text-2xl md:text-4xl font-semibold tracking-wide hover:scale-110 cursor-pointer transition animate-fade-down">
                        Scenic
                    </div>
                    <div className="nav-links hidden md:flex gap-4 lg:gap-8" aria-label="Primary navigation">
                        {[
                            { label: 'HOME', href: '/' },
                            { label: 'STUDIO', href: '/about' },
                            { label: 'OUR PEOPLE', href: '/people' },
                            { label: "LET'S TALK", href: '/contact' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                className={`nav-link text-sm lg:text-base text-white/80 hover:text-emerald-200 transition animate-fade-down animate-delay-${index + 1} focus-ring`}
                                initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                            >
                                <Link to={item.href}>{item.label}</Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md z-40 p-4 animate-fade-down">
                        <div className="flex flex-col gap-4 text-white">
                            {[
                                { label: 'HOME', href: '/' },
                                { label: 'STUDIO', href: '/about' },
                                { label: 'OUR PEOPLE', href: '/people' },
                                { label: "LET'S TALK", href: '/contact' }
                            ].map((item) => (
                                <Link key={item.label} to={item.href} className="hover:text-emerald-200 py-2 transition focus-ring">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div id="home" className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-0">
                    <div className="max-w-4xl animate-hero-rise">
                        <motion.p
                            className="text-3xl md:text-6xl lg:text-8xl text-white font-light leading-tight mb-6 animate-bounce-text text-glow"
                            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            Welcome to Scenic <br />The Creative Media Agency
                        </motion.p>
                        <motion.p
                            className="text-sm md:text-lg text-white/80 font-light mb-8 text-float"
                            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                        >
                            Specializing in Model Management and Advertising Campaigns
                        </motion.p>
                        <motion.button
                            className="btn-primary btn-glow focus-ring pulse-ring"
                            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                        >
                            Discover More
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
