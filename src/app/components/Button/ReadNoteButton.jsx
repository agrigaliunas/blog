import Link from 'next/link'
import React from 'react'

const ReadNoteButton = ({noteId}) => {
  return (
    <button className='read-note-button'>
        <Link href={`notes/${noteId}`}>
            Leer nota completa
        </Link>
    </button>
    )
}

export default ReadNoteButton