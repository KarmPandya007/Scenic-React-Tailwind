import React, { useState } from 'react'
import bgvideo from '../assets/video.mp4'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <div className="relative h-screen w-full">
                <video autoPlay muted loop playsInline className="absolute inset-0 brightness-25 w-full h-full object-cover z-[-1]">
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    className="nav flex flex-row justify-between items-center p-4 px-4 md:px-20 text-white sticky top-0 z-50 shadow-xl opacity-110 backdrop-blur-md">
                    <div className="logo text-2xl md:text-4xl hover:scale-120 cursor-pointer transition">
                        Scenic
                    </div>
                    <div className="nav-links hidden md:flex gap-4 lg:gap-8">
                        <a href="#" className="nav-link hover:text-gray-400 text-sm lg:text-base">HOME</a>
                        <a href="#" className="nav-link hover:text-gray-400 text-sm lg:text-base">STUDIO</a>
                        <a href="#" className="nav-link hover:text-gray-400 text-sm lg:text-base">OUR PEOPLE</a>
                        <a href="#" className="nav-link hover:text-gray-400 text-sm lg:text-base">LET'S TALK</a>
                    </div>
                    <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-40 p-4">
                        <div className="flex flex-col gap-4 text-white">
                            <a href="#" className="hover:text-gray-400 py-2">HOME</a>
                            <a href="#" className="hover:text-gray-400 py-2">STUDIO</a>
                            <a href="#" className="hover:text-gray-400 py-2">OUR PEOPLE</a>
                            <a href="#" className="hover:text-gray-400 py-2">LET'S TALK</a>
                        </div>
                    </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-0">
                    <div className="">
                        <p className="text-3xl md:text-6xl lg:text-8xl text-white font-light leading-tight mb-6">Welcome to Scenic <br />The Creative Media Agency</p>
                        <p className="text-sm md:text-lg text-white font-light mb-8">Specializing in Model Management and Advertising Campaigns</p>
                        <button className="font-light text-white text-sm md:text-lg bg-emerald-400 py-2 px-6 hover:bg-gray-600 cursor-pointer transition">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar