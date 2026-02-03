import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import teamphoto1 from '../assets/IntroPhotos/introphoto1.jpg'
import teamphoto2 from '../assets/IntroPhotos/introphoto2.jpg'
import teamphoto3 from '../assets/IntroPhotos/introphoto3.jpg'
import teamphoto4 from '../assets/IntroPhotos/introphoto4.jpg'

const MeetOurPeople = () => {
    const reduceMotion = useReducedMotion()
    const people = [
        { name: 'Catheriene Jann', role: 'Head Designer', photo: teamphoto1 },
        { name: 'Luke Wara', role: 'Speciality Focus', photo: teamphoto2 },
        { name: 'Mona Mana', role: 'Art Director', photo: teamphoto3 },
        { name: 'Phway Phyu', role: 'Designer in Chief', photo: teamphoto4 }
    ]

    return (
        <div id="people" className="section-padding">
            <div className="text-center text-gray-600 font-light text-2xl md:text-4xl mb-12 md:mb-20 animate-section-rise">
                Meet Our People
            </div>
            <div className="images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 justify-items-center">
                {people.map((person, index) => (
                    <motion.div
                        key={person.name}
                        className={`text-center group animate-card-rise animate-delay-${index + 1} card-surface px-6 py-8`}
                        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                    >
                        <div className="relative rounded-full p-1 bg-gradient-to-br from-emerald-300 via-white to-emerald-600 shadow-xl shadow-emerald-200/60">
                            <img
                                src={person.photo}
                                alt={person.name}
                                className="h-48 w-48 md:h-63 md:w-63 rounded-full object-cover transition duration-500 group-hover:scale-105 animate-float-slow"
                            />
                        </div>
                        <p className="text-gray-400 text-center my-3">{person.name}</p>
                        <p className="text-gray-800 text-lg md:text-xl font-bold text-center">{person.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default MeetOurPeople
