import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";

function FirstScreen() {
  return (
    <div className='flex flex-col'>
      <div className='w-screen sm:bg-[#0370F5] py-4 md:inline-block text-[#004470] flex flex-col gap-3 font-poppins'>
        <h1 className='text-2xl text-center font-extrabold'>Factoring Independiente</h1>
        <p className='text-sm text-center '>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div> 
      <div className='flex flex-row bg-[#20A6FF] py-10 px-8 gap-4'>
        <div className=''>
          <IoIosCheckmarkCircle size={50} color='white'/>
        </div>
        <p className='text-white font-lato text-xl'>Aceptamos facturas <b>sin montos mínimos</b>, hasta un plazo máximo de <b>180 días </b>calendario.</p>
      </div>
      <div className='px-6 flex flex-col gap-3 mt-6'>
        <div className='font-lato'>
          <p className=' text-[#004470] text-xl'><b>Simula tu adelanto</b> y conoce la mejor oferta que tenemos para ti.</p>
        </div>
        <div className='flex flex-col gap-7 my-4'>
          <input type="text" pattern="[0-9]{8}"  maxLength="8" placeholder='DNI' className='py-3 px-3 rounded-xl placeholder-[#00447080] placeholder:font-lato border border-[#DEE2E6]' />
          <input type="text"  maxLength="9" pattern="9[0-9]{8}" placeholder='Celular' className='py-3 px-3 rounded-xl border-2 border-[#DEE2E6]  placeholder-[#00447080] placeholder:font-lato ' />
          <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder='E-mail' className='py-3 px-3 rounded-xl border border-[#DEE2E6] placeholder-[#00447080] placeholder:font-lato' />
        </div>
        <div className='flex flex-row gap-3 items-start py-1'>
          <input type="checkbox" name="accept" className='h-6 w-10' />
          <p className='text-xs pr-16 font-lato text-[#00447080]'>He leído y acepto la <span className='text-[#20A6FF]'> Cláusula de información y consentimiento para tratamiento datos personales.</span></p>
        </div>
        <div className='my-2 mx-auto '>
          <button className='py-3 px-16 rounded-3xl bg-slate-500 text-white font-lato items-center text-center'>
            Simular
          </button>
        </div>
        <div className='pr-11'>
          <p className='text-xs text-[#00447080] text-wrap'>(*) El otorgamiento del producto está sujeto a evaluación. - - Los desembolsos se realizan en días hábiles.</p>
        </div>
      </div>
      
    </div> 
  )
}

export default FirstScreen