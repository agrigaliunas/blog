import React from 'react'

const NoteCardContent = ({content}) => {
  return (
    <div className='note-card-content' dangerouslySetInnerHTML={{ __html: `<pre>${content}</pre>` }}></div>
  )
}

export default NoteCardContent
