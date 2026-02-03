import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import letstalkbgphoto from '../assets/letstalkbgphoto.jpg'

const LetsTalk = () => {
    const reduceMotion = useReducedMotion()
    return (
        <div id="contact" className="relative bg-gray-200 section-padding overflow-hidden">
            <img
                src={letstalkbgphoto}
                alt="Studio backdrop"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-emerald-50/80"></div>
            <div className="relative text-center text-gray-600 font-light text-2xl md:text-4xl mb-12 md:mb-20 animate-section-rise">
                Talk to us!
            </div>
            <motion.form
                action=""
                className="relative flex flex-col items-center justify-center gap-2 max-w-4xl mx-auto glass-panel animate-form-rise"
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Email Address" className="form-input" />
                </div>
                <input type="text" placeholder="Subject" className="form-input w-full" />
                <textarea placeholder="Message" className="form-input w-full h-32 md:h-40 resize-none"></textarea>
                <motion.button
                    className="btn-primary btn-glow focus-ring my-5 pulse-ring"
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </div>
    )
}

export default LetsTalk
