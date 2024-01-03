import React from 'react'
import BanBif_logo from '@assets/Banbif_logo.svg'
function Navbar() {
  return (
    <header className='flex'>
        <div className='mx-4 my-6 md:mx-16 md:mt-5 md:mb-3'>
            <img src={BanBif_logo} alt="Logo de BanBif" />
        </div>
    </header>
  )
}

export default Navbar