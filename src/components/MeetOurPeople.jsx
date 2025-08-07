import React from 'react'
import teamphoto1 from '../assets/PeoplePhotos/team-image1.jpg'
import teamphoto2 from '../assets/PeoplePhotos/team-image2.jpg'
import teamphoto3 from '../assets/PeoplePhotos/team-image3.jpg'
import teamphoto4 from '../assets/PeoplePhotos/team-image4.jpg'

const MeetOurPeople = () => {
    return (
        <div className="mb-30">
            <div className="text-center text-gray-600 font-light text-4xl mb-20 ">Meet Our People</div>
            <div className="images flex flex-row flex-wrap justify-center items-center gap-6">
                <div className="">
                    <img src={teamphoto1} alt=""
                        className="h-63 w-63 hover:scale-105 transition duration-300 cursor-pointer" />
                    <p className="text-gray-400 text-center my-3">Catheriene Jann</p>
                    <p className="text-gray-800 text-xl font-bold text-center">Head Designer</p>
                </div>
                <div className="">
                    <img src={teamphoto2} alt=""
                        className="h-63 w-63 hover:scale-105 transition duration-300 cursor-pointer" />
                    <p className="text-gray-400 text-center my-3">Luke Wara</p>
                    <p className="text-gray-800 text-xl font-bold text-center">Speciality Focus</p>
                </div>
                <div className="">
                    <img src={teamphoto3} alt=""
                        className="h-63 w-63 hover:scale-105 transition duration-300 cursor-pointer" />
                    <p className="text-gray-400 text-center my-3">Mona Mana</p>
                    <p className="text-gray-800 text-xl font-bold text-center">Art Director</p>
                </div>
                <div className="">
                    <img src={teamphoto4} alt=""
                        className="h-63 w-63 hover:scale-105 transition duration-300 cursor-pointer" />
                    <p className="text-gray-400 text-center my-3">Phway Phyu</p>
                    <p className="text-gray-800 text-xl font-bold text-center">Designer in Chief</p>
                </div>
            </div>
        </div>
    )
}

export default MeetOurPeople