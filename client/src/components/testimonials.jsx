import React from 'react'
import {images,testimonialInfo} from '../assets/assets'

const Testimonials = () => {
 return (
  <div className="bg-gray-50 flex flex-col items-center">
    <h1 className="text-center my-7 text-3xl font-bold">They love us. You will too</h1>
    <div className="flex justify-center space-x-7 mx-10 w-full overflow-x-scroll">
        {testimonialInfo.map((user)=>{
          const {name, work, profile, comment, logo} = user
          return (
            <div key={name} className="flex flex-col items-start min-w-60 max-w-[350px] h-[450px] bg-white rounded-xl shadow-md border-gray-300 border-2 p-8 text-sm">
              <img className="mb-10 mt-10" src={logo} />
              <p className="mb-12">{comment}</p>
              <img src={profile} className="w-20 rounded-full" />
              <span className="block">{name}</span>
              <span className="block mb-7">{work}</span>
            </div>
          )
        })}
    </div>
  </div>
 )
}

export default Testimonials