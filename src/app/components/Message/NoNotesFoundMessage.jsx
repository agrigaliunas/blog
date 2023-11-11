import Link from 'next/link'
import React from 'react'

function NoNotesFoundMessage() {
  return (
    <div className='flex items-center flex-col my-52 text-center'>
        <h1 className='text-white md:text-5xl text-2xl font-bold'>
            Uooopss... No hay notas aquí 😔
        </h1>
        <p className='text-white md:text-2xl text-lg mt-5'>
            Sígueme en <Link className="text-blue-400" href="https://www.twitter.com/agustingriga" >Twitter</Link> para estar al tanto de nuevas notas.
        </p>
    </div>
  )
}

export default NoNotesFoundMessage