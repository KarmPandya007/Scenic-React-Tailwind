import React from 'react'

const Footer = () => {
    return (
        <div className="footer flex flex-col flex-wrap justify-center items-center p-10">
            <div className="flex flex-row gap-30">
                <div className="flex flex-col gap-4">
                    <p className="font-light text-4xl text-gray-800">Digital Studio</p>
                    <p className="text-gray-600 text-md font-light">
                        Scenic Media Agency <br />
                        2158 Sunset Boulevard, <br />
                        Suite 300, Los Angeles, CA 90026, <br />
                        United States
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-light text-4xl text-gray-800">Keep in touch</p>
                    <p className="text-gray-600 text-md font-light my-[-4px]">010-090-0780</p>
                    <p className="text-gray-600 text-md font-light my-[-4px]">info@company.com</p>
                    <p className="text-gray-600 text-md font-light my-[-4px]">Our Location</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-light text-4xl text-gray-800">About Us</p>
                    <p className="text-gray-600 text-lg font-light">We connect top talent with bold brands <br /> to create
                        powerful
                        visuals that inspire, influence, <br /> and make a lasting impact.</p>
                    <div className="icons flex gap-6 mt-3">
                        <i className="fa-brands fa-x-twitter scale-120 hover:text-gray-950 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-facebook-f scale-120 hover:text-blue-600 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-instagram scale-120 hover:text-pink-600 hover:scale-150 cursor-pointer transition"></i>
                        <i className="fa-brands fa-linkedin-in scale-120 hover:text-blue-500 hover:scale-150 cursor-pointer transition"></i>
                    </div>
                </div>
            </div>

            <div className="text-gray-700 text-md font-light mt-20">Copyright &copy; 2025 Company Name | Design: Tooplate</div>

        </div>

    )
}

export default Footer