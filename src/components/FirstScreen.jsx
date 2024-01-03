import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import Girl_BanBif from '@assets/Girl_BanBif.svg'

function FirstScreen() {
  
  const [celular, setCelular] = useState('');
  const [dni, setDni] = useState('');

  const handleCelularChange = (e) => {
    let inputValue = e.target.value;

    // Eliminar caracteres no numéricos
    inputValue = inputValue.replace(/\D/g, '');

    // Asegurar que el primer dígito sea "9"
    if (inputValue.length > 0 && inputValue[0] !== '9') {
      inputValue = '9' + inputValue.slice(1);
    }

    // Limitar la longitud del celular a 9 dígitos
    if (inputValue.length > 9) {
      inputValue = inputValue.slice(0, 9);
    }

    setCelular(inputValue);
  };

  const handleDniChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/\D/g,'');
    // Limitar la longitud del DNI a 8 dígitos
    if (inputValue.length > 8) {
      inputValue = inputValue.slice(0, 8);
    }

    setDni(inputValue);
  };
  return (
    <div className='flex flex-col'>
      <div className='w-screen md:bg-gradient-to-r md:from-sky-400 md:via-blue-600 md:to-blue-600 md:py-16 md:pl-52 md:text-start text-center md:text-white py-4 md:inline-block text-[#004470] flex flex-col gap-3 font-poppins'>
        <h1 className='text-2xl md:text-4xl font-extrabold'>Factoring Independiente</h1>
        <p className='text-sm  md:text-xl md:mt-2'>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div> 
      <div className='flex flex-row bg-[#20A6FF] py-10 px-8 gap-4 md:hidden'>
        <div>
          <IoIosCheckmarkCircle size={50} color='white'/>
        </div>
        <p className='text-white font-lato text-xl'>Aceptamos facturas <b>sin montos mínimos</b>, hasta un plazo máximo de <b>180 días </b>calendario.</p>
      </div>
      {/* NUEVO DIV PARA RESPONSIVE PC */}
      <div className='hidden md:inline w-screen '>
        <div className='flex flex-row gap-20 md:ml-52 md:my-6'>
          <div className='flex flex-row gap-10'>
            <div className='items-center'>
              <img src={Girl_BanBif} alt="Girl BanBif" className='w-[186px] h-[242px]' />
            </div>
            <div className='font-lato text-[#004470] text-[18px] my-10 flex flex-col gap-4'>
              <div className='flex flex-row gap-4 text-justify items-start'>
                <FaCheck size={30} color='#20A6FF'/>
                <p><b>Desembolsos al 100%</b> del cobro de tus <br />
                 facturas el mismo día (*).</p>
              </div>
              <div className='flex flex-row gap-4 text-justify items-start'>
                <FaCheck size={30} color='#20A6FF'/>
                <p>Aceptamos facturas <b>sin montos mínimos, <br /></b> hasta un plazo máximo de <b>180 días <br /></b> calendario.</p>
              </div>
              <div>
                <p className='text-[#00447080] text-sm'>(*) El otorgamiento del producto está sujeto a evaluación. <br /> Los desembolsos se realizan en días hábiles.</p>
              </div>             
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[#004470] text-lg md:mt-3'>Simula tu adelanto y conoce la mejor oferta <br /> que tenemos para ti.</p>
            <div className='flex flex-col gap-7 my-4'>
              <input type="text" value={dni}  onChange={handleDniChange} pattern="[0-9]{8}"  maxLength="8" placeholder='DNI' className='py-3 px-3 rounded-xl placeholder-[#00447080] placeholder:font-lato border border-[#DEE2E6]' />
              <input type="text" value={celular} onChange={handleCelularChange}  maxLength="9" pattern="9[0-9]{8}" placeholder='Celular' className='py-3 px-3 rounded-xl border-2 border-[#DEE2E6]  placeholder-[#00447080] placeholder:font-lato ' />
              <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder='E-mail' className='py-3 px-3 rounded-xl border border-[#DEE2E6] placeholder-[#00447080] placeholder:font-lato' />
            </div>
            <div className='flex flex-row gap-3 items-start py-1'>
              <input  type="checkbox" name="accept" className='h-6 w-10' />
              <p className='text-xs pr-16 font-lato text-[#00447080]'>He leído y acepto la <span className='text-[#20A6FF]'> Cláusula de información y <br />consentimiento para tratamiento datos personales.</span></p>
            </div>
            <div className='my-2 mx-auto '>
              <button className='py-3 px-16 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 text-white font-lato items-center text-center'>
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='px-6 flex flex-col gap-3 mt-6 md:hidden'>
        <div className='font-lato'>
          <p className=' text-[#004470] text-xl'><b>Simula tu adelanto</b> y conoce la mejor oferta que tenemos para ti.</p>
        </div>
        <div className='flex flex-col gap-7 my-4'>
          <input type="text" value={dni}  onChange={handleDniChange} pattern="[0-9]{8}"  maxLength="8" placeholder='DNI' className='py-3 px-3 rounded-xl placeholder-[#00447080] placeholder:font-lato border border-[#DEE2E6]' />
          <input type="text" value={celular} onChange={handleCelularChange}  maxLength="9" pattern="9[0-9]{8}" placeholder='Celular' className='py-3 px-3 rounded-xl border-2 border-[#DEE2E6]  placeholder-[#00447080] placeholder:font-lato ' />
          <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder='E-mail' className='py-3 px-3 rounded-xl border border-[#DEE2E6] placeholder-[#00447080] placeholder:font-lato' />
        </div>
        <div className='flex flex-row gap-3 items-start py-1'>
          <input  type="checkbox" name="accept" className='h-6 w-10' />
          <p className='text-xs pr-16 font-lato text-[#00447080]'>He leído y acepto la <span className='text-[#20A6FF]'> Cláusula de información y consentimiento para tratamiento datos personales.</span></p>
        </div>
        <div className='my-2 mx-auto '>
          <button className='py-3 px-16 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 text-white font-lato items-center text-center'>
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