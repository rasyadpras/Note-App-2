import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { showFormattedDate } from "../utils";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import NoteDetail from "../components/notes/NoteDetail";
import NotFoundMessage from "../components/action layout/NotFoundMessage";

function DetailNotePage() {
    const [note, setNote] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/notes/${id}/edit`)
    }

    const handleArchive = () => {
        if (note.archived) {
            unarchiveNote(id)
            navigate('/archives')
        } else {
            archiveNote(id)
            navigate('/')
        }
    }

    const handleDelete = () => {
        deleteNote(id)
        navigate('/')
    }

    useEffect(() => {
        const showNote = getNote(id)
        if (showNote) {
            setNote(showNote)
        }
    }, [])

    return (
        <section className="detail-page">
            { 'id' in note ? (
                <>
                    <Link to="/" title="Back">
                        <HiArrowLeft />
                        {' '}
                        Back
                    </Link>
                    <h3 className="detail-page__title">
                        { note.title }
                    </h3>
                    <p className="detail-page__createdAt">
                        {showFormattedDate(note.createdAt)}
                    </p>
                    <div className="detail-page__body">
                        { note.body }
                    </div>
                </>
            ) : (
                <NotFoundMessage />
            )}
            <NoteDetail archived={note.archived || false} handleEdit={handleEdit} handleArchive={handleArchive} handleDelete={handleDelete}/>
        </section>
    )
}

export default DetailNotePage;