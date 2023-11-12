import React from 'react'

const NoteCardInputTitle = ({onInputTitle}) => {
  return (
    <div className=''>
      <input 
        name="title"
        placeholder='Escribe un título...'
        className="bg-transparent w-full outline-none note-card-title"
        onChange={onInputTitle}
        />
    </div>
  )
}

export default NoteCardInputTitle