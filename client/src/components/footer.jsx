import React from 'react'
import {images} from "../assets/assets"

 const Footer = () => {
  return (
    <div className="bg-gray-500 py-20 space-y-14 px-12">
      <div className="flex justify-between flex-col space-y-5 sm:flex-row md:flex-row lg:flex-row">
        <div className="bg-white px-8 py-2 font-bold rounded-2xl max-w-32 text-center ">
          English
        </div>
        <ul className="flex space-x-3">
          <li><img src={images.facebook_icon} /></li>
          <li><img src={images.google_plus_icon} /></li>
        </ul>
      </div>
      <div className="text-white flex flex-col-reverse justify-between font-bold text-sm sm:flex-row md:flex-row">
        <p>© remove.bg, a Canva Austria GmbH brand</p>
        <ul className="flex space-y-3 text-sm flex-col text-center sm:flex-row md:flex-row lg:flex-row">
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