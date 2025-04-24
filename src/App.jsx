import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import heroBg from './Images/heroBg.jpg'
import About from './components/About'
import Services from './components/Services'
import Course from './components/Course'
import Portfolio from './components/Portfolio'
import WhChose from './components/WhChose'
import StartProject from './components/StartProject'
import ExpRef from './components/ExpRef'

function App() {
  return (
    <div className=''>

      <Navbar/>
      <div style={{ backgroundImage: `url(${heroBg})` }} className='bg-cover bg-center'>
      <Hero/>
      </div>
      <About/>
      <Services/>
      <Course/>
      <Portfolio/>
      <WhChose/>
      <StartProject/>
      <ExpRef/>
    </div>
  )
}

export default App