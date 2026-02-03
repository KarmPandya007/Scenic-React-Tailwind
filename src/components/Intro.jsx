import React, { useState } from 'react'
import introphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import introphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import introphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import introphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const Intro = () => {
  const [campaigns, setCampaigns] = useState(120)
  const highlights = [
    { label: 'Talent Network', value: '350+ creators' },
    { label: 'Campaigns Delivered', value: '120+ global brands' },
    { label: 'Average Growth', value: '3.2x lift' }
  ]

  return (
    <div id="intro" className="section-padding section-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-section-rise">
            <div className="eyebrow mb-6 animate-text-reveal animate-delay-1">Introducing Scenic</div>
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
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`card-surface p-4 animate-card-rise animate-delay-${index + 1}`}
                >
                  <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span>Active campaigns:</span>
              <span key={campaigns} className="text-lg font-semibold text-gray-900 animate-diff-swap">
                {campaigns}+
              </span>
              <button
                className="btn-outline focus-ring"
                type="button"
                onClick={() => setCampaigns((value) => value + 1)}
              >
                Refresh stat
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-primary focus-ring">Our Studio</button>
              <button className="btn-outline focus-ring">View Case Studies</button>
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
                  className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${index === 1 ? 'animate-fall-in' : 'animate-rise-in'} ${index === 0 ? 'animate-float-slow' : ''}`}
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
