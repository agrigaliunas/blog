import React from 'react'
import NotesSection from './components/Note/NotesSection'

export default async function Home() {
  return (
    <>
      <main className="main items-center">
        <NotesSection />
      </main>
    </>
  )
}
