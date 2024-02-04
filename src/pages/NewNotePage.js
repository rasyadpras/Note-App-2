import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { addNote } from "../utils/local-data";
import InputNoteAction from "../components/notes/InputNoteAction";

function NewNotePages() {
    const navigate = useNavigate()
  
    const [form, setForm] = useState({
      title: '',
      body: '',
    })
  
    const handleTitleChange = (event) => {
        setForm((data) => ({ ...data, title: event.target.value }))
      }
  
      const handleBodyChange = (event) => {
          setForm((data) => ({ ...data, body: event.target.value }))
        }
  
    const handleSave = () => {
      const { title, body } = form
      addNote({ title, body })
      navigate('/')
    }
  
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
        <>
            <Link to="/" title="Back">
              <HiArrowLeft />
              {' '}
              Back
            </Link>
            <div className="add-new-page__input">
              <input className="add-new-page__input__title" placeholder="Title" value={form.title} onChange={handleTitleChange}/>
              <textarea className="add-new-page__input__body" placeholder="Note" value={form.body} onChange={handleBodyChange}/>
            </div>
          </>
        </div>
        <InputNoteAction handleSave={handleSave}/>
      </section>
  
    )
}

export default NewNotePages;