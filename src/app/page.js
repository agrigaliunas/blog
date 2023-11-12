import {connectDB} from '@/app/utils/db'
import Note from '@/app/models/Note'
import NoteCard from './components/Card/NoteCard';
import NoNotesFoundMessage from './components/Message/NoNotesFoundMessage';

const loadNotes = async () => {
  connectDB();
  const notes = await Note.find().sort({updatedAt: "desc"})
  return notes 
}

export default async function Home() {
  
  const notes = await loadNotes()

  return (
    <>
      {notes.length === 0 && <NoNotesFoundMessage />}

      <main className="main items-center">
        {notes.map(n => (
          <div key={n._id}>
            <NoteCard note={n} />
          </div>
        ))}
      </main>
    </>
  )
}
