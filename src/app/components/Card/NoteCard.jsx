import React from 'react'
import NoteCardTitle from './NoteCardTitle'
import NoteCardContent from './NoteCardContent'
import Divider from '../Divider/Divider'
import NoteCardDate from './NoteCardDate'
import NoteCardLabel from './NoteCardLabel'

const NoteCard = ({note}) => {
  return (
    <div className='note-card'>
        <div className='mt-5 mb-3'>
            <NoteCardTitle title={note.title} />
        </div>
        <NoteCardDate updatedDate={note.updatedAt} />
        <Divider />
        <div className='my-3 note-labels'>
          {note.labels.map(label => (
            <NoteCardLabel noteLabel={label}/>
          ))}
        </div>
        <div className='my-3'>
          <NoteCardContent content={note.content} />
        </div>
    </div>
  )
}

export default NoteCard