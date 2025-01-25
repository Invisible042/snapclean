import React from 'react'
import Header from '../components/header.jsx'
import Introduction from '../components/introduction.jsx'
import Preview from '../components/preview.jsx'
import Footer from '../components/footer.jsx'
import Testimonials from '../components/testimonials.jsx'

const Home = () => {
  return (
    <div>
        <Introduction />
        <Preview />
        <Testimonials />
    </div>
  )
}

export default Home