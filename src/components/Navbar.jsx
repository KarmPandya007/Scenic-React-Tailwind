import React from 'react'
import bgvideo from '../assets/video.mp4'

const Navbar = () => {
    return (
        <div>
            <div className="relative h-screen w-full">
                <video autoPlay muted loop playsInline className="absolute inset-0 brightness-25 w-full h-full object-cover z-[-1]">
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    className="nav flex flex-row justify-between items-center p-6 px-20 text-white sticky top-0 z-50 shadow-xl opacity-110 backdrop-blur-md">
                    <div className="logo text-4xl hover:scale-120 cursor-pointer transition">
                        Scenic
                    </div>
                    <div className="nav-links flex gap-8">
                        <a href="#" className="nav-link hover:text-gray-400">HOME</a>
                        <a href="#" className="nav-link hover:text-gray-400">STUDIO</a>
                        <a href="#" className="nav-link hover:text-gray-400">OUR PEOPLE</a>
                        <a href="#" className="nav-link hover:text-gray-400">LET'S TALK</a>
                    </div>
                </div>
                <div className="page1 text-left p-22">
                    <p className="text-8xl text-white font-light">Welcome to Scenic <br /> The Creative Media Agency</p>
                    <p className="text-lg my-8 pl-4 text-white font-light">Specializing in Model Management and Advertising
                        Campaigns</p>
                    <button
                        className="font-light text-white text-lg bg-emerald-400 py-2 px-4 mx-3 my-2 hover:bg-gray-600 cursor-pointer transition ">Discover
                        More</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar