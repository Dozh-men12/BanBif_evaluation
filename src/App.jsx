
import Navbar from './components/Navbar'



function App() {
  

  return (
    <>
    <Navbar/>
    <div className='flex flex-col w-screen h-screen'>
      <div className='w-screen sm:bg-[#0370F5] py-4 md:inline-block text-[#004470] flex flex-col gap-3 font-poppins'>
        <h1 className='text-2xl text-center font-extrabold'>Factoring Independiente</h1>
        <p className='text-sm text-center '>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div> 
      <div className='flex flex-row bg-[#20A6FF] py-4 px-8'>
        <p className='text-white font-lato text-xl'>Aceptamos facturas <b>sin montos mínimos</b>, hasta un plazo máximo de <b>180 días </b>calendario.</p>

      </div>
      {/* <div className='w-screen bg-[#0370F5] px-5 py-11 hidden sm:inline'>
        <h1 className='text-2xl text-center font-extrabold md:text-3xl md:font-bold md:text-start  md:inline'>Factoring Independiente</h1>
        <p className='text-sm font text-center'>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div>   
      <div className='w-screen bg-[#0370F5] px-5 py-11 hidden sm:bloc'>
        <h1 className='text-2xl text-center font-extrabold md:text-3xl md:font-bold md:text-start  md:inline'>Factoring Independiente</h1>
        <p className='text-sm font text-center'>Obtén la liquidez inmediata que tu negocio necesita</p>        
      </div>    */}
    </div>
    
       
    </>
  )
}

export default App
