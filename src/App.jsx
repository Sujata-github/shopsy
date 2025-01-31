import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/topProducts/TopProducts'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import PopUp from './components/popup/PopUp'

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false)
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    Aos.refresh()
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
