'use client'
import LoadingNotesMessage from '@/app/components/Message/LoadingNotesMessage';
import Note from '@/app/components/Note/Note';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const {id} = useParams();
  const [fetchingNotes, setFetchingNotes] = useState(false);
  const [showedNote,  setShowedNote]  =  useState({title: "", labels: [], content: ""})

  useEffect(() => {
    setFetchingNotes(true)
    async function fetchNote() {
      const fetchedNote  = await fetch(`/api/notes/${id}`)
      const jsonNote  = await fetchedNote.json()
      setShowedNote(jsonNote)

      if (jsonNote) {
        setFetchingNotes(false)
      }
    } 

    fetchNote()
  }, [])

  return (
    <main className='main-note'>
      {fetchingNotes && <LoadingNotesMessage />}
      {!fetchingNotes && <Note note={showedNote} />}
    </main>
  )
}

export default Page
