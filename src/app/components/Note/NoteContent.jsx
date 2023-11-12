import React from 'react'

const NoteContent = ({content}) => {
  return (
    <div className='note-content ' dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
  )
}

export default NoteContent