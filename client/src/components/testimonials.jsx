import React from 'react'
import {images,testimonialInfo} from '../assets/assets'

const Testimonials = () => {
 return (
  <div className="bg-gray-50 flex flex-col items-center">
    <h1 className="text-center my-7 text-3xl font-bold">They love us. You will too</h1>
    <div className="flex space-x-7 mx-10">
        {testimonialInfo.map((user)=>{
          const {name, work, profile, comment, logo} = user
          return (
            <div key={name} className="flex flex-col items-start max-w-[350px] min-w-[350px] rounded-xl shadow-md border-gray-300 border-2 p-8">
              <img className="mb-16 mt-16" src={logo} />
              <p className="mb-20">{comment}</p>
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