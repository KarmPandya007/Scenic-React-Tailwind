import React from 'react'
import introphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import introphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import introphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import introphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const Intro = () => {
  return (
    <div className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-bold tracking-[3px] md:tracking-[8px] text-gray-800 mb-8">INTRODUCING SCENIC</h2>
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-600 font-light leading-relaxed max-w-5xl mx-auto">
            Scenic is a modern media agency that bridges the gap between talent and top-tier advertising. We specialize in representing models, creators, and visual storytellers for campaigns that don't just catch attention — they define brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="group">
            <img src={introphoto1} alt="Creative work showcase" className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500" />
          </div>
          <div className="group">
            <img src={introphoto2} alt="Creative work showcase" className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500" />
          </div>
          <div className="group">
            <img src={introphoto3} alt="Creative work showcase" className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500" />
          </div>
          <div className="group">
            <img src={introphoto4} alt="Creative work showcase" className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro