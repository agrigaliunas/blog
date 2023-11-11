import React from 'react'

const NoteCardLabel = ({noteLabel}) => {
  return (
    <div className='label'>
        <span>#{noteLabel.toUpperCase()}</span>
    </div>
  )
}

export default NoteCardLabel