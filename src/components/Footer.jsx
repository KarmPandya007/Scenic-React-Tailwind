import React from 'react'
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="text-3xl font-bold tracking-tighter mb-8">
                            SCENIC<span className="text-emerald-500">.</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            A boutique creative studio crafting elevated digital experiences and narratives for visionary brands.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-emerald-500">Studio</h4>
                        <ul className="space-y-4 text-slate-400 font-medium">
                            <li><a href="#home" className="hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="#people" className="hover:text-white transition-colors">Talent Network</a></li>
                            <li><a href="#intro" className="hover:text-white transition-colors">Campaigns</a></li>
                            <li><a href="#intro" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-emerald-500">Contact</h4>
                        <ul className="space-y-4 text-slate-400 font-medium">
                            <li>hello@scenic.studio</li>
                            <li>+1 (555) 000-SCENIC</li>
                            <li>Milan, Italy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-emerald-500">Newsletter</h4>
                        <p className="text-slate-400 mb-6 font-medium">Stay updated with our latest drops.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email Address" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500 font-bold text-xs uppercase hover:text-emerald-400 transition-colors">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; 2025 Scenic Studio. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                    >
                        Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
