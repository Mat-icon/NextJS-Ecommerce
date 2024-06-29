import { Google } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className='bg-slate-100 sign-logo w-full h-screen flex items-center justify-center'>
        <div className="form-container w-11/12 md:w-2/5 h-auto bg-white shadow-md shadow-black p-6 flex flex-col space-y-4">
            <h1 className='w-full text-center text-2xl font'>Matthew&apos;s Store</h1>
            <form className='flex flex-col space-y-6 ubuntu'> 
                <input type='email' placeholder='Enter email' className='p-2 bg-slate-50' required/>
                <input type='password' placeholder='Password' className='p-2 bg-slate-50' required />
                <Link href='/' className=' text-sm'>Forget Password?</Link>
                <button className='text-2xl ubuntu-bold bg-black text-white tracking-widest p-2 hover:bg-slate-50 duration-300 ease-in hover:text-black'>SIGN IN</button>
            </form>
            <p className='w-full text-center text-gray-800'>or</p>
            <button className="google border border-emerald-400 space-x-5 p-2 items-center flex justify-center hover:bg-emerald-400 text-black duration-300 ease-in"><Google className='text-black mr-2'/>Sign in with Google</button>

            <p className='text-gray-600 text-sm'>You don&apos;t have an account? <Link href='/signup' className='text-emerald-400 decoration-current'>Create one</Link></p>
        </div>
    </div>
  )
}
 
export default Signin