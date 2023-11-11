import React from 'react'
import NoteCardTitle from './NoteCardTitle'
import NoteCardContent from './NoteCardContent'
import Divider from '../Divider/Divider'
import NoteCardDate from './NoteCardDate'
import NoteCardLabel from './NoteCardLabel'
import ReadNoteButton from '../Button/ReadNoteButton'

const NoteCard = ({note}) => {
  return (
    <>
      <div className='note-card'>
        <div className='text-left'>
          <div className='mt-5 mb-3'>
              <NoteCardTitle title={note.title} />
          </div>
          <NoteCardDate updatedDate={note.updatedAt} />
          <Divider />
          <div className='my-3 note-labels overflow-x-scroll scrollbar-hide'>
            {note.labels.map(label => (
              <NoteCardLabel key={note._id} noteLabel={label}/>
            ))}
          </div>
          <div className='my-3'>
            <NoteCardContent content={note.content} />
          </div>
        </div>
      </div>
      <div className='my-3'>
        <ReadNoteButton noteId={note._id} />
      </div>
    </>
  )
}

export default NoteCard