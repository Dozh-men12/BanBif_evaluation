import { useState } from 'react'
import BanBif_logo from './assets/Banbif_logo.svg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mt-3'>
      <img src={BanBif_logo} alt="" />
    </div>
      
       
    </>
  )
}

export default App
