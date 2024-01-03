import React from 'react'

function SecondScreen() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='w-screen md:bg-gradient-to-r md:from-sky-400 md:via-blue-600 md:to-blue-600 md:py-16 md:pl-52 md:text-start text-center md:text-white py-4 md:inline-block text-[#004470] flex flex-col gap-3 font-poppins'>
        <h1 className='text-2xl md:text-4xl font-extrabold'>Factoring Independiente</h1>
        <p className='text-sm  md:text-xl md:mt-2'>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div>      
     <div className='md:flex md:flex-row md:mt-7 md:gap-10 md:mx-96 md:items-center md:text-center '>      
      <div className='text-[#004470] font-lato flex flex-col gap-3 px-16  md:px-0 md:text-start text-center'>
          <p className='text-xl  md:whitespace-nowrap font-semibold md:text-3xl'>Monto a desembolsar:</p>
          <p className='text-6xl font-bold py-3  md:text-7xl '>S/1,000</p>
          <p className='text-[#00447080] px-4 md:px-0 font-semibold md:mt-4'> Tasa de interés efectiva anual: 23% <br /> La Tasa es referencial.</p>
      </div>
      <div className='flex flex-col md:px-44 px-4 gap- items-center text-[#004470] text-center'>
        <p className='md:text-start mt-10 md:mt-3 flex'>Sabemos que estás interesado en el producto, por eso dentro de las 24 horas hábiles siguientes, 9-6pm, un ejecutivo BanBif se comunicará contigo al número brindado para brindarte mayor información.</p>
        <p className='text-xs font-medium mt-3 md:text-start text-[#00447080] md:mt-4'>Las comisiones del producto pueden ser consultadas en el Tarifario General de BanBif, disponible en nuestra página web www.banbif.pe </p>
      </div>
     </div>    
    </div>
  )
}

export default SecondScreen