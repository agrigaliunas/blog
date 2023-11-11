import {connectDB} from '@/app/utils/db'
import Note from '@/app/models/Note'
import Header from './components/Header/Header';

const loadNotes = async () => {
  connectDB();
  const notes = await Note.find()
  return notes 
}

export default async function Home() {
  
  const notes = await loadNotes()

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between">
        {notes.map(note => (
          <div key={note._id}>
            <span>{note.title}</span>
            <span>{note.content}</span>
          </div>
        ))}
      </main>
    </>
  )
}
