import React from 'react'
import letstalkbgphoto from '../assets/letstalkbgphoto.jpg'

const LetsTalk = () => {
    return (
        <div className="bg-gray-200 mb-20 md:mb-30 pt-12 md:pt-20 pb-10 bg-[url('https://www.tooplate.com/templates/2133_moso_interior/images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg')] px-4">
            <div className="text-center text-gray-600 font-light text-2xl md:text-4xl mb-12 md:mb-20">Talk to us!</div>
            <form action="" className="flex flex-col items-center justify-center gap-2 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
                    <input type="text" placeholder="Name" className="bg-white rounded-md p-3 w-full md:w-80 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                    <input type="text" placeholder="Email Address" className="bg-white rounded-md p-3 w-full md:w-80 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                </div>
                <input type="text" placeholder="Subject" className="bg-white rounded-md p-3 w-full md:w-167 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                <textarea placeholder="Message" className="bg-white rounded-md p-3 w-full md:w-167 h-32 md:h-40 mb-4 focus:outline-none focus:border-emerald-400 transition resize-none"></textarea>
                <button
                    className="font-light text-white text-sm md:text-lg bg-emerald-400 py-2 px-6 md:px-4 mx-3 my-5 hover:bg-gray-600 cursor-pointer transition">Send
                    Message</button>
            </form>
        </div>
    )
}

export default LetsTalk