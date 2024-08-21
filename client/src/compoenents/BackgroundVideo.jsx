// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export const  BackgroundVideo = () => {
  return (
    <div className='min-h-screen relative my-10'>
     <video className='absolute top-0 left-0 w-full h-full object-cover z-0' src={("../../public/BackgroundV.mp4")}
      autoPlay muted loop playsInline/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      {/* text */}
      <div className='flex flex-col p-10  relative z-20 mt-[20%]'>
        <p className='text-white text-xl text-center mb-10'>Ved å bli medlem støtter du oss aktivt med å betale din medlemskontingent</p>
        <Link>
        <button className="bg-[#E73B3D] text-white md:ml-[40%] ml-0 px-20 py-4 rounded-full hover:bg-red-600">
              Bli Medlem
            </button>
        </Link>
      
      </div>
    </div>
  )
}

