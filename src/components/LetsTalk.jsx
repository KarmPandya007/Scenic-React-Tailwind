import React from 'react'
import letstalkbgphoto from '../assets/letstalkbgphoto.jpg'

const LetsTalk = () => {
    return (
        <div id="contact" className="relative bg-gray-200 section-padding overflow-hidden">
        <div className="relative bg-gray-200 mb-20 md:mb-30 pt-12 md:pt-20 pb-10 px-4 overflow-hidden">
            <img
                src={letstalkbgphoto}
                alt="Studio backdrop"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-emerald-50/80"></div>
            <div className="relative text-center text-gray-600 font-light text-2xl md:text-4xl mb-12 md:mb-20 animate-section-rise">
                Talk to us!
            </div>
            <form
                action=""
                className="relative flex flex-col items-center justify-center gap-2 max-w-4xl mx-auto glass-panel animate-form-rise"
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Email Address" className="form-input" />
                </div>
                <input type="text" placeholder="Subject" className="form-input w-full" />
                <textarea placeholder="Message" className="form-input w-full h-32 md:h-40 resize-none"></textarea>
                <button className="btn-primary btn-glow focus-ring my-5 pulse-ring">
                <button className="font-light text-white text-sm md:text-lg bg-emerald-500 py-2 px-6 md:px-4 mx-3 my-5 hover:bg-emerald-600 cursor-pointer transition shadow-lg shadow-emerald-400/40 hover:scale-105 active:scale-95">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default LetsTalk
