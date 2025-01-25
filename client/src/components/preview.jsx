import React from 'react'
import {useState} from 'react'
import {images} from '../assets/assets.js'

const Preview = () => {
  const [preview, setPreview] = useState('product')
  const [list, setList] = useState(["People",'Product','Animals', 'Cars', 'Graphics'])
  const [rangeValue, setRangeValue] = useState(50)
  
  const updateState = (e) =>{
    e.preventDefault()
    const text = e.target.innerText
    if(text === "product"){
      return "hello"
    }
    // setPreview(e.target.value)
  }

 
  const ListItems = ()=>{
    list.map((items)=>{
      const className = ` ${items==='People' ? "bg-gray-300 px-3 py-2 hover:text-yellow-200 text-md text-gray-600":"hover:text-yellow-200 text-md text-gray-600"}`
      return <li className={className}><a>{items}</a></li>
    })
  }

  const handleChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setRangeValue(e.target.value)
  }

  return (
    <div className="bg-white flex flex-col space-y-10 items-center mt-20">
        <h1 className="text-gray-600 text-4xl sm:text-5xl font-bold " >Stunning Quality</h1>
        <ul className="flex justify-center space-x-10 text-md font-semibold text-gray-500">
           <ListItems  />
        </ul>
        <div className="relative">
           <img style={{clipPath:`inset(0 ${100.5 - rangeValue}% 0 0 )`}} className="h-96" src={images.littleboy} />
           <img style={{clipPath:`inset(0 0 0 ${rangeValue}%)`}}  src={images.little_boy_bgremoved} className="h-96 absolute top-0" />
           <input onChange={handleChange} type="range" className="slider absolute top-1/2 left-48"  min="0" max="100"/>
        </div>
        <p>See more samples </p>
    </div>
  )
}

export default Preview