import React from 'react'
import introphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import introphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import introphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import introphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const Intro = () => {
  const highlights = [
    { label: 'Talent Network', value: '350+ creators' },
    { label: 'Campaigns Delivered', value: '120+ global brands' },
    { label: 'Average Growth', value: '3.2x lift' }
  ]

  return (
    <div className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-section-rise">
          <h2 className="text-sm md:text-base font-bold tracking-[3px] md:tracking-[8px] text-gray-800 mb-8">
            INTRODUCING SCENIC
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-600 font-light leading-relaxed max-w-5xl mx-auto">
            Scenic is a modern media agency that bridges the gap between talent and top-tier advertising. We specialize in representing models, creators, and visual storytellers for campaigns that don't just catch attention — they define brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {[introphoto1, introphoto2, introphoto3, introphoto4].map((photo, index) => (
            <div
              key={photo}
              className={`group relative overflow-hidden rounded-2xl animate-card-rise animate-delay-${index + 1}`}
            >
              <img
                src={photo}
                alt="Creative work showcase"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Intro
