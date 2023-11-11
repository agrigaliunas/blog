import React from 'react'
import NoteCardTitle from './NoteCardTitle'
import NoteCardContent from './NoteCardContent'
import Divider from '../Divider/Divider'

const NoteCard = ({note}) => {
  return (
    <div className='note-card'>
        <div className='my-5'>
            <NoteCardTitle title={note.title} />
        </div>
            <Divider />
        <div className='my-3'>
            <NoteCardContent content={note.content} />
        </div>
    </div>
  )
}

export default NoteCard