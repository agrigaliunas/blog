import { TextareaAutosize } from '@mui/material'
import React from 'react'

const NoteCardInputContent = ({onInputContent}) => {
  return (
    <TextareaAutosize
      onChange={onInputContent}
      name="content"
      className='bg-transparent w-full h-screen resize-none outline-none note-card-content'
      placeholder='Escribe tu nota'
    />
  )
}

export default NoteCardInputContent