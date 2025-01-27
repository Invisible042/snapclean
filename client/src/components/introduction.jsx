import React from 'react'
import {images} from "../assets/assets"

const Introduction = () => {
  return (
    <div className="flex flex-col items-center space-y-6 w-full p-3 sm-p-16 md:flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col items-center  start rounded-lg bg-white md:flex-row md:max-w-2xl lg:max-w-lg lg:flex-col"> 
            <div className="h-60 rounded-lg w-full max-w-5xl">
                <img className="bg-contain w-[370px] h-[200px]" src={images.littleboy} alt="littleboy-img"/>
            </div>
            <div className="text-center w-full max-w-5xl">
               <h1 className="font-bold text-4xl text-gray-700">Remove image background</h1>
               <p className="my-5 text-xl font-semibold text-gray-600">100% Automatically and <span className=" bg-cover bg-center">free</span></p>
            </div>
        </div>
        <div className="w-full max-w-5xl px-4">
          <div className=" rounded-3xl sm:border-2 text-center sm:shadow-2xl sm:shadow-gray-400 sm:px-28 sm:pb-28 sm:pt-32">
            <label for="upload-img" > <span className="bg-blue-600 shadow-sm shadow-gray-500 w-full max-w-96 rounded-full mb-4 block sm:px-12 py-[12px] sm:mb-7 text-2xl sm:text-xl text-white font-semibold">Upload image</span><input className="hidden" type="file" name="upload-file" id="upload-img" /></label>
            <span className="block text-gray-600 font-bold text-lg" >Or  drop a file</span>
            <span className="block text-gray-400 sm:block">paste img or Url</span>
          </div>
        </div>
    </div>
  )
}

export default Introduction