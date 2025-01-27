import React from 'react'
import Upload from './pages/upload.jsx'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
// import Header from './components/header.jsx'

const App = () => { 

  return(
    <div className="w-full">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/upload' element={<Upload />} />
      </Routes>
      <Footer />
    </div>
  )

}
  export default App