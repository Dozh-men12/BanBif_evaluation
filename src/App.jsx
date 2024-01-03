import { useState } from 'react'
import Navbar from './components/Navbar'



function App() {
  

  return (
    <>
    <Navbar/>
    <div className='flex flex-col w-screen text-center items-center my-5  font-poppins  text-[#004470] gap-3' >
      <h1 className='text-2xl text-center font-extrabold '>Factoring Independiente</h1>
      <p className='text-sm font text-center'>Obtén la liquidez inmediata que tu negocio necesita</p>

    </div>
    
       
    </>
  )
}

export default App
