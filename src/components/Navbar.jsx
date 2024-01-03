import React from 'react'
import BanBif_logo from '@assets/Banbif_logo.svg'
function Navbar() {
  return (
    <header className='w-screen flex'>
        <div className='mx-4 my-6'>
            <img src={BanBif_logo} alt="Logo de BanBif" />
        </div>
    </header>
  )
}

export default Navbar