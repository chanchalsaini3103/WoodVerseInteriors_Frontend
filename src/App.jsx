import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import InteriorGallery from './components/InteriorGallery'
import EstimateSection from './components/EstimateSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Navbar />
     <Services />
     <InteriorGallery />
     <EstimateSection />
     <Footer />
    </>
  
   
  )
}

export default App