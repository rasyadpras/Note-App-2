import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { editNote, getNote } from "../utils/local-data";
import InputNoteAction from "../components/notes/InputNoteAction";
import NotFoundMessage from "../components/action layout/NotFoundMessage";

function EditNotePage() {
    const [form, setForm] = useState({
      id: '',
      archived: false,
      title: '',
      body: '',
    })

    const { id } = useParams()
    const navigate = useNavigate()
  
    const handleTitleChange = (event) => {
      setForm((data) => ({ ...data, title: event.target.value }))
    }

    const handleBodyChange = (event) => {
        setForm((data) => ({ ...data, body: event.target.value }))
      }
  
    const handleSave = () => {
      const { title, body } = form
      editNote({ id, title, body })
      navigate(`/notes/${id}`)
    }
  
    useEffect(() => {
      const showNote = getNote(id)
      if (showNote) {
        const { title, archived, body } = showNote
        setForm({
          id,
          title,
          archived,
          body,
        })
      }
    }, [])
  
    return (
      <section className="edit-page">
        { form.id !== '' ? (
          <>
            <Link to="/" title="Back">
              <HiArrowLeft />
              {' '}
              Back
            </Link>
            <div className="edit-page__input">
              <input className="edit-page__input__title" placeholder="Title" value={form.title} onChange={handleTitleChange}/>
              <textarea className="edit-page__input__body" placeholder="Note" value={form.body} onChange={handleBodyChange}/>
            </div>
          </>
        ) : (
          <NotFoundMessage />
        )}
  
        <InputNoteAction handleSave={handleSave}/>
      </section>
    )
}

export default EditNotePage;