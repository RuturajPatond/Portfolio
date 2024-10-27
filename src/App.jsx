import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from'react-hot-toast';
export default function App() {
  return (
    <>
    <div>

    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    <Toaster/>
    </>
  )
}
