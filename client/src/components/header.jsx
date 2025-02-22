import React from 'react'
import {useState} from 'react'
import Upload from '../pages/removebg.jsx'
import {Link} from "react-router-dom"
import {images} from '../assets/assets.js'

const Header = (components) => {
  const {changeComponent} = components
  const [isClicked, setIsClicked] = useState(true)

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
    <div className="border-gray-100 bg-white border-y-2 flex space-x-6 justify-between py-6 px-7 text-center my-auto  w-full">
      <Link to="/" className="my-auto">  
      <img src={images.logo} className="w-8 inline-block mb-2" alt="logo-img" /><span className="bg-gradient-to-r from-yellow-300 to-purple-400 text-transparent bg-clip-text text-3xl font-bold my-auto inline-block">snapclean</span></Link>
      <ul className="my-auto hidden space-x-6 lg:flex text-xl text-gray-500 font-bold">
        <li className="hover:text-red-400"><Link to="/removeBg" >Remove Background</Link></li>
        <li className="hover:text-red-400"><Link to="/Features">Features</Link></li>
        <li className="hover:text-red-400" ><Link to="/forbusiness" >For business</Link></li>
        <li className="hover:text-red-400" ><Link to="/pricing" >Pricing</Link></li>
      </ul>
      <div className="space-x-8 my-auto">
      <div onClick={()=>isClicked ? setIsClicked(false) : setIsClicked(true)}>
        {isClicked ?
          <svg className='sm:hidden'
          width="30" height="30" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
         <line x1="3" y1="6" x2="21" y2="6" />
         <line x1="3" y1="12" x2="16" y2="12" />
         <line x1="3" y1="18" x2="21" y2="18" />
        </svg> : <div className="space-y-4 text-2xl font-bold fixed top-0 right-0 bg-white w-3xl h-full">
          <h1>sign up</h1>
          <h1>sign in</h1>
          <h1>Remove background</h1>
        </div>
        }
      </div>
      <Link to="/login" className="text-sm text-purple-500 font-semibold hidden sm:inline-block">Log in</Link>
      <Link to="/signup" className="hidden text-sm bg-blue-600 rounded-full px-4 py-[5px] font-semibold text-white sm:inline-block">Sign up</Link>
      </div>
    </div>
  )
}

export default Header