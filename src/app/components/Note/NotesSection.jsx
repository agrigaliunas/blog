'use client'
import { useEffect, useState } from 'react';
import React from 'react'
import NoNotesFoundMessage from '../Message/NoNotesFoundMessage';
import NoteCard from '../Card/NoteCard';
import LoadingNotesMessage from '../Message/LoadingNotesMessage';

const NotesSection = () => {
    const [fetchingNotes, setFetchingNotes] = useState(false);
    const [notes, setShowedNotes]  = useState([])
  
    useEffect(() => {
      setFetchingNotes(true)
      async function fetchNotes() {
        const fechedNote  = await fetch(`/api/notes`)
        const jsonNote  = await fechedNote.json()
        setShowedNotes(jsonNote)
  
        if (jsonNote) {
          setFetchingNotes(false)
        }
      } 
  
      fetchNotes()
    }, [])


  return (
    <>
    {notes.length === 0 && <NoNotesFoundMessage />}
    {fetchingNotes && <LoadingNotesMessage />}
        {notes.map(n => (
        <div key={n._id}>
        <NoteCard note={n} />
        </div>
    ))}
    </>
  )
}

export default NotesSection