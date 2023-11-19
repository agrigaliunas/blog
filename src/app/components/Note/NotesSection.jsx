'use client'
import { useEffect, useState } from 'react';
import React from 'react'
import NoNotesFoundMessage from '../Message/NoNotesFoundMessage';
import NoteCard from '../Card/NoteCard';
import LoadingNotesMessage from '../Message/LoadingNotesMessage';

const NotesSection = () => {
    const [fetchingNotes, setFetchingNotes] = useState(false);
    const [notes, setShowedNotes]  = useState([])
    const [noNotesFetched, setNoNotesFetched] = useState(false)

    useEffect(() => {
      async function fetchNotes() {
        setFetchingNotes(true)
        const fetchedNotes  = await fetch(`/api/notes`)
        const jsonNotes = await fetchedNotes.json()
        if (!fetchedNotes) {
          setNoNotesFetched(true)
        }
        setShowedNotes(jsonNotes)
        setFetchingNotes(false)
      } 
  
      fetchNotes()
    }, [])

  return (
    <>
      {!fetchingNotes ? notes.map(n => (
        <div key={n._id}>
          <NoteCard note={n} />
        </div>
      )) : <LoadingNotesMessage />}
      {noNotesFetched && <NoNotesFoundMessage />}
    </>
  )
}

export default NotesSection