import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Work = () => {
    const reduceMotion = useReducedMotion()
    const projects = [
        'Global Fashion Campaign',
        'Lifestyle Product Launch',
        'Editorial Studio Series',
        'Luxury Hospitality Rebrand'
    ]

    return (
        <section className="section-padding section-surface">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-3xl md:text-5xl font-light text-gray-900 mb-8 text-glow"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Work
                </motion.h1>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project}
                            className="card-surface p-6"
                            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={reduceMotion ? undefined : { y: -6 }}
                        >
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">{project}</h2>
                            <p className="text-gray-600">
                                A curated blend of creative direction, production, and talent representation.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
