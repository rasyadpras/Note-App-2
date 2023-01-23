import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { addNote } from "../utils/network-data";
import AddNoteAction from "../components/notes/AddNoteAction";
import useInput from "../hooks/useInput";
import useLanguage from "../hooks/useLanguage";

function NewNotePages() {
    const navigate = useNavigate();
    const textApp = useLanguage("home");
    const textNote = useLanguage("newNote");
  
    const [ title, setTitle ] = useInput('');
    const [ body, setBody ] = useState(textNote.bodyPlaceholder);

    const onBodyChange = (body) => {
      setBody(body)
    }
  
    const handleSave = () => {
      addNote({ title, body }).then((res) => {
        if (!res.error) {
          navigate('/')
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
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
              <input className="add-new-page__input__title" placeholder={textNote.titlePlaceholder} value={title} onChange={setTitle}/>
              <textarea className="add-new-page__input__body" placeholder={textNote.bodyPlaceholder} value={body} onChange={onBodyChange}/>
            </div>
          </>
        </div>
        <AddNoteAction handleSave={handleSave}/>
      </section>
  
    )
}

export default NewNotePages;