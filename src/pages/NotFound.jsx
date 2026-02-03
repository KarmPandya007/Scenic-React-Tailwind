import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const NotFound = () => {
    const reduceMotion = useReducedMotion()

    return (
        <section className="section-padding section-surface">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-light text-gray-900 mb-4"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Page not found
                </motion.h1>
                <p className="text-gray-600 mb-8">
                    The page you are looking for doesn&apos;t exist. Let&apos;s get you back to Scenic.
                </p>
                <Link to="/" className="btn-primary focus-ring">
                    Return home
                </Link>
            </div>
        </section>
    )
}

export default NotFound
