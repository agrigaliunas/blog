import Link from 'next/link'
import React from 'react'

const ReadNoteButton = ({noteId}) => {
  return (
    <button className='bg-[#d64040] font-bold text-md p-2 my-1 rounded-md'>
        <Link href={`notes/${noteId}`}>
            Leer nota completa
        </Link>
    </button>
    )
}

export default ReadNoteButton