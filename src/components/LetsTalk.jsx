import React from 'react'
import letstalkbgphoto from '../assets/letstalkbgphoto.jpg'

const LetsTalk = () => {
    return (
        <div className=" bg-gray-200 mb-30 pt-20 pb-10 bg-[url('https://www.tooplate.com/templates/2133_moso_interior/images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg')]">
            <div className="text-center text-gray-600 font-light text-4xl mb-20">Talk to us!</div>
            <form action="" className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-row flex-wrap justify-center items-center gap-6">
                    <input type="text" placeholder="Name" className=" bg-white rounded-md p-3 w-80 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                    <input type="text" placeholder="Email Address" className=" bg-white rounded-md p-3 w-80 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                </div>
                <input type="text" placeholder="Subject"
 lass=" bg-white rounded-md p-3 w-167 mb-4 focus:outline-none focus:border-emerald-400 transition" />
                <textarea placeholder="Message" className=" bg-white rounded-md p-3 w-167 h-40 mb-4 focus:outline-none focus:border-emerald-400 transition"></textarea>
                <button
                    className="font-light text-white text-lg bg-emerald-400 py-2 px-4 mx-3 my-5 hover:bg-gray-600 cursor-pointer transition">Send
                    Message</button>
            </form>
        </div>
    )
}

export default LetsTalk