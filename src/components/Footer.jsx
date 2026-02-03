import React from 'react'

const Footer = () => {
    return (
        <div className="footer flex flex-col justify-center items-center p-6 md:p-10 px-4 bg-gradient-to-b from-white via-emerald-50/50 to-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-30 max-w-6xl w-full">
                <div className="flex flex-col gap-4 text-center md:text-left animate-section-rise">
                    <p className="font-light text-2xl md:text-4xl text-gray-800">Digital Studio</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        Scenic Media Agency <br />
                        2158 Sunset Boulevard, <br />
                        Suite 300, Los Angeles, CA 90026, <br />
                        United States
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-left animate-section-rise animate-delay-1">
                    <p className="font-light text-2xl md:text-4xl text-gray-800">Keep in touch</p>
                    <p className="text-gray-600 text-sm md:text-md font-light my-[-4px]">010-090-0780</p>
                    <p className="text-gray-600 text-sm md:text-md font-light my-[-4px]">info@company.com</p>
                    <p className="text-gray-600 text-sm md:text-md font-light my-[-4px]">Our Location</p>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-left animate-section-rise animate-delay-2">
                    <p className="font-light text-2xl md:text-4xl text-gray-800">About Us</p>
                    <p className="text-gray-600 text-sm md:text-lg font-light">We connect top talent with bold brands to create
                        powerful
                        visuals that inspire, influence, and make a lasting impact.</p>
                    <div className="icons flex gap-6 mt-3 justify-center md:justify-start">
                        <i className="fa-brands fa-x-twitter scale-120 hover:text-gray-950 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-facebook-f scale-120 hover:text-blue-600 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-instagram scale-120 hover:text-pink-600 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-linkedin-in scale-120 hover:text-blue-500 hover:scale-150 cursor-pointer transition"></i>
                    </div>
                </div>
            </div>

            <div className="text-gray-700 text-xs md:text-md font-light mt-12 md:mt-20 text-center">Copyright &copy; 2025 Company Name | Design: Tooplate</div>

        </div>

    )
}

export default Footer
