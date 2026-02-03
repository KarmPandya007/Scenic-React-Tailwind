import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import teamphoto1 from '../assets/PeoplePhotos/team_gen_1.png'
import teamphoto2 from '../assets/PeoplePhotos/team_gen_2.png'
import teamphoto3 from '../assets/PeoplePhotos/team_gen_3.png'
import teamphoto4 from '../assets/PeoplePhotos/team_gen_4.png'

const MeetOurPeople = () => {
    const people = [
        { name: 'Alessandra Rossi', role: 'Executive Creative Director', photo: teamphoto1 },
        { name: 'Sarah Jenkins', role: 'Head of Talent Strategy', photo: teamphoto2 },
        { name: 'Julian Voss', role: 'Senior Art Director', photo: teamphoto3 },
        { name: 'Elena Moretti', role: 'Principal Designer', photo: teamphoto4 }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <section id="people" className="py-24 md:py-32 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase mb-4">Our Collaborative</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">Visionaries behind the scenes.</h3>
                </motion.div>

                <motion.div
                    className="images-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {people.map((person) => (
                        <motion.div key={person.name} variants={itemVariants} className="group">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-slate-200">
                                <img
                                    src={person.photo}
                                    alt={person.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <Instagram size={20} className="text-white hover:text-emerald-400 cursor-pointer" />
                                        <Twitter size={20} className="text-white hover:text-emerald-400 cursor-pointer" />
                                        <Linkedin size={20} className="text-white hover:text-emerald-400 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{person.name}</h4>
                                <p className="text-slate-500 font-medium">{person.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default MeetOurPeople
