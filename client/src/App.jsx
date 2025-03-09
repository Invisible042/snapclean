import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Signup from './pages/signup.jsx'
import Login from './pages/login.jsx'
import RemoveBg from './pages/removebg.jsx'
// import Header from './components/header.jsx'

const App = () => { 

  return(
    <div className="w-full">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/removeBg' element={<RemoveBg />}/>
      </Routes>
      <Footer />
    </div>
  )

}
  export default App