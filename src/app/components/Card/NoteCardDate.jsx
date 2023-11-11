import React from 'react'

const NoteCardDate = ({updatedDate}) => {

  const formattedDate = String(updatedDate).slice(0,15)

  return (
    <span className="note-card-date">
        Última actualización: {formattedDate}
    </span>
  )
}

export default NoteCardDate

