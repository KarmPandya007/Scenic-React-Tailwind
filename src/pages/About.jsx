import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const About = () => {
    const reduceMotion = useReducedMotion()

    return (
        <section className="section-padding section-surface">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <motion.div
                    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="eyebrow mb-6">About Scenic</div>
                    <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 text-glow">
                        We blend editorial precision with modern media strategy.
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Scenic is a talent-first agency with a boutique approach to campaign strategy, visual direction,
                        and creator management. Our work is informed by brand performance and elevated through artful storytelling.
                    </p>
                </motion.div>
                <motion.div
                    className="card-surface p-8"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">What sets us apart</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li>• Strategic creative that scales with performance.</li>
                        <li>• Curated roster of global creators.</li>
                        <li>• End-to-end production and campaign execution.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}

export default About
