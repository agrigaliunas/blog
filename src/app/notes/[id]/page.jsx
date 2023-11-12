'use client'
import Note from '@/app/components/Note/Note';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const {id} = useParams();
  const [showedNote,  setShowedNote]  =  useState({title: "", labels: [], content: ""})

  useEffect(() => {
    async function fetchNote() {
      const fechedNote  = await fetch(`/api/notes/${id}`)
      const jsonNote  = await fechedNote.json()
      console.log(jsonNote)
      setShowedNote(jsonNote)
    } 

    fetchNote()
  }, [])

  return (
    <main className='main-note'>
      <Note note={showedNote} />
    </main>
  )
}

export default Page
