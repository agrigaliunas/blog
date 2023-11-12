import React from 'react'
import NoteCardLabel from '../Card/NoteCardLabel'
import Divider from '../Divider/Divider'
import NoteCardContent from '../Card/NoteCardContent'
import NoteCardTitle from '../Card/NoteCardTitle'
import NoteCardDate from '../Card/NoteCardDate'
import NoteContent from './NoteContent'

const Note = ({note}) => {
  return (
    <>
    <div className='w-full h-screen px-5'>
        <NoteCardTitle title={note.title}/>
        <NoteCardDate updatedDate={note.updatedAt} />
        <Divider />
        <div className='my-3 note-labels overflow-x-scroll scrollbar-hide'>
            {note.labels.map(label => (
              <NoteCardLabel key={note._id} noteLabel={label}/>
            ))}
        </div>
        <NoteContent content={note.content} />
    </div>
    </>
  )
}

export default Note