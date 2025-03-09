import React from 'react'
import {images} from "../assets/assets"

 const Footer = () => {

  // const SocialIcons = ()=>{
  //   images.social_icons.map((icons)=>{
  //     return <li><img>src={icons}</img></li>
  //   })
  // }
  return (
    <div className="bg-gray-500 py-20 space-y-14 px-12">
      <div className="flex flex-col items-center space-y-5 sm:flex-row sm:justify-between md:flex-row lg:flex-row">
        <div className="bg-white px-8 py-2 font-bold rounded-2xl max-w-32 text-center ">
          English
        </div>
        <ul className="flex space-x-3">
          {images.social_icons.map((icons)=>{
            return (<li><img src={icons} className="w-7 h-7" /></li>)
          })}
        </ul>
      </div>
      <div className="text-white flex flex-col-reverse items-center justify-between font-bold text-sm sm:flex-row md:flex-row">
        <p>© snapclean, a technova brand</p>
        <ul className="flex space-y-3 text-sm flex-col items-center sm:flex-row md:flex-row lg:flex-row lg:items-center lg:space-y-0 lg:space-x-3">
          <li><a>Terms of Service</a></li>
          <li><a>General Terms and Conditions</a></li>
          <li><a>Privacy Policy</a></li>
          <li><a>Cookie Policy</a></li>
          <li><a>Imprint</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer