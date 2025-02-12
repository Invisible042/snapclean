import React from 'react'
import {images} from "../assets/assets"

const Introduction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 to-pink-50" style={{minHeight:"calc(-73px + 100vh)"}}>
      <div className="flex flex-col items-center space-y-6 p-3 sm-p-16 md:flex-col lg:flex-row lg:justify-center  ">
        <div className="w-full flex flex-col justify-center max-w-x rounded-lg  md:flex-row lg:flex-col lg:ml-36"> 
            <div className="h-60 rounded-lg w-full max-w-5xl">
                <img className="bg-contain w-[370px] h-[200px] mx-auto" src={images.littleboy} alt="littleboy-img"/>
            </div>
            <div className="text-center w-full">
               <h1 className="font-bold text-4xl text-gray-700 sm:text-5xl">Remove image background</h1>
               <p className="my-5 text-xl font-semibold text-gray-600">100% Automatically and <span className=" bg-cover bg-center block w-10 mx-auto bg-yellow-200">free</span></p>
            </div>
        </div>
        <div className="w-full lg:mr-36">
          <div className="bg-white rounded-3xl mt-10 sm:border-2 text-center sm:shadow-2xl sm:shadow-gray-400 sm:pt-36 max-w-md mx-auto min-h-[360px]">
            <label for="upload-img" > <span className="bg-blue-600 shadow-sm shadow-gray-500 w-full max-w-64 rounded-full mb-4 block sm:px-11 py-[12px] sm:mb-7 text-2xl sm:text-xl text-white font-semibold mx-auto cursor-pointer">Upload image</span>
            <input className="hidden" type="file" name="upload-file" id="upload-img" />
            </label>
            <span className="block text-gray-600 font-bold text-lg" >Or  drop a file </span>
            <span className="block text-gray-400 sm:block">paste img or Url</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Introduction