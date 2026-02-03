import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, Mail, MapPin, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react'

const LetsTalk = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedType, setSelectedType] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const projectTypes = [
        'Branding & Identity',
        'Talent Management',
        'Editorial Campaign',
        'Digital Strategy'
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Fake loading for 3 seconds
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccess(true)

            // Reset form fields
            e.target.reset()
            setSelectedType('')

            // Auto hide success message after 5 seconds
            setTimeout(() => setShowSuccess(false), 5000)
        }, 3000)
    }

    return (
        <section id="contact" className="py-24 md:py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-info"
                    >
                        <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase mb-4">Contact Us</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8 italic">Let's create something iconic together.</h3>
                        <p className="text-lg text-slate-500 mb-12 max-w-md">
                            Ready to take your brand to the next level? Our team is standing by to help you craft your next masterpiece.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email us</p>
                                    <p className="text-xl font-bold text-slate-900 transition-colors">hello@scenic.studio</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call us</p>
                                    <p className="text-xl font-bold text-slate-900 transition-colors">+1 (555) 000-SCENIC</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Visit us</p>
                                    <p className="text-xl font-bold text-slate-900 transition-colors">Milan, Italy</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-form bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600 ml-1">Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600 ml-1">Email</label>
                                    <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white" />
                                </div>
                            </div>

                            <div className="space-y-2 relative">
                                <label className="text-sm font-bold text-slate-600 ml-1">Project Type</label>
                                <div
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white cursor-pointer flex justify-between items-center hover:border-emerald-500 transition-colors group"
                                >
                                    <span className={selectedType ? "text-slate-900 font-medium" : "text-slate-400"}>
                                        {selectedType || "Select project type"}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={20} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 5, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute left-0 right-0 top-full z-[60] bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-emerald-500/10 overflow-hidden py-2"
                                        >
                                            {projectTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    onClick={() => {
                                                        setSelectedType(type)
                                                        setIsDropdownOpen(false)
                                                    }}
                                                    className="px-6 py-3 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer transition-colors text-slate-600 font-medium"
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600 ml-1">Message</label>
                                <textarea required rows="4" placeholder="Tell us about your vision..." className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none bg-white"></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 text-black font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group overflow-hidden relative ${isSubmitting ? 'bg-emerald-500/50 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-400'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccess(false)}
                            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            className="bg-white rounded-[2.5rem] p-10 md:p-16 max-w-lg w-full relative z-[101] shadow-2xl text-center border border-slate-100"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                                className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20"
                            >
                                <CheckCircle2 size={40} className="text-white" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Message Received</h2>
                            <p className="text-slate-500 leading-relaxed mb-10">
                                Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default LetsTalk
