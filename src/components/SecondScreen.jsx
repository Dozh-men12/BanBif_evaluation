import React from 'react'

function SecondScreen() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='w-screen sm:bg-[#0370F5] py-4 md:inline-block text-[#004470] flex flex-col gap-3 font-poppins'>
            <h1 className='text-2xl text-center font-extrabold'>Factoring Independiente</h1>
            <p className='text-sm text-center '>Obtén la liquidez inmediata que tu negocio necesita</p>        
        </div>
      <div className='text-[#004470] font-lato flex flex-col gap-3 px-16'>
        <p className='text-xl text-center font-semibold'>Monto a desembolsar:</p>
        <p className='text-6xl text-center font-bold py-3'>S/1,000</p>
        <p className='text-[#00447080] text-center px-4 font-semibold'> Tasa de interés efectiva anual: 23% La Tasa es referencial.</p>
      </div>
      <div className='flex flex-col gap-3 text-center px-6 font-lato text-[#004470] mt-4'>
        <p className='font-normal'>Sabemos que estás interesado en el producto, por eso dentro de las 24 horas hábiles siguientes, 9-6pm, un ejecutivo BanBif se comunicará contigo al número brindado para brindarte mayor información.</p>
        <p className='text-xs text-[#00447080] font-medium'>Las comisiones del producto pueden ser consultadas en el Tarifario General de BanBif, disponible en nuestra página web www.banbif.pe </p>

      </div>
     
    
    </div>
  )
}

export default SecondScreen