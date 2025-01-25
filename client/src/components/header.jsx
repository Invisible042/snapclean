import React from 'react'
import {useState} from 'react'
import Upload from '../pages/upload'
import {Link} from "react-router-dom"

const Header = (components) => {
  const {changeComponent} = components

  const handleClick = (e)=>{
    e.preventDefault()
    const data = {
      "Remove background": <Upload/>,
      "Features":<Upload/>,
      "For business":<Upload/>,
      "Pricing":<Upload/>
    }
    const innerText = e.target.innerText
    console.log(innerText, typeof(innerText))
    changeComponent(data[innerText])
  }

  return (
    <div className="border-black border-y-2 flex space-x-6 justify-between py-6 px-7">
      <Link to="/" ><img className="" alt="logo-img" /></Link>
      <ul className="hidden space-x-2 md:flex lg:flex">
        <li className="hover:text-red-400"><Link to="/upload" >Remove Background</Link></li>
        <li className="hover:text-red-400"><Link to="/Features">Features</Link></li>
        <li className="hover:text-red-400" ><Link to="/forbusiness" >For business</Link></li>
        <li className="hover:text-red-400" ><Link to="/pricing" >Pricing</Link></li>
      </ul>
      <div className="space-x-8">
      <Link to="/login" className="text-md font-thin text-gray-600">Log in</Link>
      <Link to="/signup" className="text-md bg-gray-200 rounded-full px-4 py-[5px] font-thin text-gray-600">Sign up</Link>
      </div>
    </div>
  )
}

export default Header