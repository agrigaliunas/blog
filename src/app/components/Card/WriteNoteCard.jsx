'use client'
import React, { useEffect, useState } from 'react'
import NoteCardInputTitle from './NoteCardInputTitle'
import Divider from '../Divider/Divider'
import "quill/dist/quill.snow.css";
import 'react-quill/dist/quill.snow.css';
import { useRouter, useParams } from 'next/navigation'
import ReactQuill, { Quill } from 'react-quill';

const WriteNoteCard = () => {

  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const getNote = async () => {
    const res = await fetch(`/api/notes/${params.id}`);
    const data = await res.json();
    setNewNote({ title: data.title, content: data.content });
  };

  useEffect(() => {
    if (params.id) {
      getNote();
    }
  }, []);

  const createNote = async () => {
    try {
      await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      router.replace("/");
      // Optionally, you can use router.reload() for a full page reload
      // router.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = async (e) => {
    console.log(newNote)

    e.preventDefault();
    let errs = validateNote();
    
    if (Object.keys(errs).length) return setErrors(errs);
    
    setIsSubmitting(true);
    if (!params.id) {
      await createNote();
    }    
    router.replace("/");
  };

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value)
    setNewNote({ ...newNote, "title": noteTitle });

  }

  const handleContentChange = (value) => {
    setNoteContent(value)
    setNewNote({ ...newNote, "content": value });
  }


  const validateNote = () => {
    let errors = {};

    if (!newNote.title) {
      errors.title = "Title is required";
    }
    if (!newNote.content) {
      errors.content = "Content is required";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='write-note-card'>
          <div className='text-left w-full'>
              <div className='mt-5 mb-3'>
                  <NoteCardInputTitle value={newNote.title} onInputTitle={handleTitleChange}/>
              </div>
              <Divider />
              {/* <div className='my-3 note-labels overflow-x-scroll scrollbar-hide'>
                
              </div> */}
              <div className='my-3'>
                <ReactQuill className="text-white" theme="snow" value={newNote.content} onChange={handleContentChange} />
              </div>
          </div>
      </div>
      <div className='my-3 w-full flex justify-start'>
        <button className='write-note-button' type="submit">
          Crear nota
        </button>      
      </div>
    </form>
  )
}

export default WriteNoteCard;
