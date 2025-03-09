import React from 'react'
import {useState} from 'react'
import {images} from '../assets/assets.js'

const Preview = () => {
  const [previewImage, setPreviewImage] = useState('littleboy')
  const [previewImageRm, setPreviewImageRm] = useState('littleboyBgremoved')
  const [rangeValue, setRangeValue] = useState(53)

  const previewList = {people:'littleboy',products:'watch', animals:'dog', cars:'cars', graphics:'graphics'}

  const handleChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setRangeValue(e.target.value)
  }

  const handleClick = (e)=>{
    setListImage(previewList[e.target.innerText])
  }

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center mt-20 w-full px-4 space-y-8">
        <h1 className="text-gray-600 text-4xl sm:text-5xl font-bold " >Stunning Quality</h1>
        <div className="flex justify-center gap-10 text-md overflow-x-scroll hide-scrollbars font-semibold text-gray-600 w-full px-4 max-w-full">
          <button className="bg-gray-200 py-1 px-5 rounded-full">People</button>
          <button className=" py-1 px-4">Product</button>
          <button className=" py-1 px-4">Animals</button>
          <button className=" py-1 px-4">Cars</button>
          <button className=" px-4 py-2">Graphics</button>
        </div>
        <div className="relative">
           <img style={{clipPath:`inset(0 ${100.1 - rangeValue}% 0 0 )`}} className="max-h-[500px]" src={images[previewImage]} alt="img here" />
           <img style={{clipPath:`inset(0 0 0 ${rangeValue}%)`}}  src={images[previewImageRm]} className="max-h-[500px] absolute top-0" alt='img here' />
           <input onChange={handleChange} type="range" className="slider absolute top-1/2 left-1/2"step="0.01"  min="0" max="100"/>
          </div>
        <p>See more samples </p>
    </div>
  )
}

export default Preview