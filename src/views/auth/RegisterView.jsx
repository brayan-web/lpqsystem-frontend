
import { Link } from "react-router-dom"
const RegisterView = () => {
  return (
    
    <form className='space-y-5'>
      <h1 className='text-gray-900 text-center text-2xl py-2'>Crear Cuenta</h1>
      <div className='flex flex-col gap-3'>
          <label className='font-normal text-md text-gray-500'>E-mail</label>
          <input type="text" className='w-full p-3 border-gray-300 border text-sm  rounded-3xl focus:border-[#079284] focus:ring-[#079284] focus:outline-none transition duration-300 outline-0' />
      </div>
      <div className='flex flex-col gap-3'>
          <label className='font-normal text-md text-gray-500'>contraseña</label>
          <input type="password" className='w-full p-3 border-gray-300 border text-sm rounded-3xl focus:border-[#079284] focus:ring-[#079284] focus:outline-none transition duration-300 outline-0' />
      </div>
      <input type="submit" className='bg-[#079284] p-3 w-full rounded-3xl text-white text-md cursor-pointer transition duration-300 hover:opacity-75' value='Registrarme'/>
      <hr className="border-t border-gray-300 my-4" />
      <nav className='text-center'>
      <Link to={'/'} className='text-[#079284] text-sm'>¿ya tienes una cuenta? Inicia sesión</Link>

      </nav>
    </form>
  
  )
}

export default RegisterView
