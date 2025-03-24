import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div className='w-full h-screen justify-center flex items-center '>

      <div className='border-2 rounded-2xl p-4 flex gap-8 flex-col'>
      <h1 className='text-7xl font-semibold'>SEJA BEM-VINDO </h1>
      
      <Link href="/" className="bg-blue-500 text-center text-4xl px-3 py-2 text-2xl font-bold">Voltar</Link>
      </div>
      
    </div>
  )
}

export default page
