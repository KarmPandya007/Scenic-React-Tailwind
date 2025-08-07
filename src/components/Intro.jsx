import React from 'react'
import introphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import introphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import introphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import introphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const Intro = () => {
  return (

    <div className="flex flex-col pt-40 pb-30 items-center justify-center text-center">
      <p className="font-bold tracking-[10px]">INTRODUCING SCENIC</p>
      <p className="text-gray-600 font-light text-3xl mt-10">
        Scenic is a modern media agency that bridges the gap between <br /> talent and top-tier advertising. We
        specialize in <br /> representing models, creators, and visual storytellers <br /> for campaigns that don't just
        catch attention — they define brands.
      </p>


      <div className="flex flex-row flex-wrap justify-center items-center gap-10 my-30">
        <div className="">
          <img src={introphoto1} alt=""
            className="h-85 w-130 hover:scale-105 transition duration-300 cursor-pointer" />
        </div>
        <div className="">
          <img src={introphoto2} alt=""
            className="h-85 w-130 hover:scale-105 transition duration-300 cursor-pointer" />
        </div>
        <div className="">
          <img src={introphoto3} alt=""
            className="h-85 w-130 hover:scale-105 transition duration-300 cursor-pointer" />
        </div>
        <div className="">
          <img src={introphoto4} alt=""
            className="h-85 w-130 hover:scale-105 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </div>

  )
}

export default Intro