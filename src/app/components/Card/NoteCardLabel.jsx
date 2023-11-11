import React from 'react'

const NoteCardLabel = ({noteLabel}) => {
  return (
    <div className='label'>
        #{noteLabel.toUpperCase()}
    </div>
  )
}

export default NoteCardLabel