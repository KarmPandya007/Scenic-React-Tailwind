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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-section-rise">
            <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[6px] text-gray-500 mb-6 animate-text-reveal animate-delay-1">
              <span className="h-[1px] w-10 bg-emerald-400"></span>
              Introducing Scenic
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6 animate-text-reveal animate-delay-2">
              <span className="animate-text-sheen">
                A refined creative studio aligning visionary talent with premium brand narratives.
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 animate-text-reveal animate-delay-3">
              Scenic is a modern media agency bridging curated talent and top-tier advertising. We build campaigns
              that are deliberate, editorial, and designed to move culture forward.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm"
                >
                  <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-card-rise">
            {[introphoto1, introphoto2, introphoto3, introphoto4].map((photo, index) => (
              <div
                key={photo}
                className={`group relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'h-48 md:h-56' : 'h-60 md:h-72'}`
                }
              >
                <img
                  src={photo}
                  alt="Creative work showcase"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
