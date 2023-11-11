import {connectDB} from '@/app/utils/db'
import Note from '@/app/models/Note'
import Header from './components/Header/Header';
import NoteCard from './components/Card/NoteCard';

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
      <main className="main">
        {notes.map(n => (
          <div key={n._id}>
            <NoteCard note={n} />
          </div>
        ))}
      </main>
    </>
  )
}
