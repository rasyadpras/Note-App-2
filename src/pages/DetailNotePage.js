import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { showFormattedDate } from "../utils";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";
import NotFoundMessage from "../components/action layout/NotFoundMessage";
import LoadingIndicator from "../components/action layout/Loading";
import useLanguage from "../hooks/useLanguage";
import NoteDetail from "../components/notes/NoteDetail";

function DetailNotePage() {
    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const textApp = useLanguage("home");
    const textNote = useLanguage("detailNote");

    const handleArchive = () => {
        let methods = null
        let navigateTo = "/"
        if (note.archived) {
            methods = unarchiveNote(id)
            navigateTo = '/archives'
        } else {
            methods = archiveNote(id)
        }
        methods
        .then((res) => {
          if (!res.error) {
            navigate(navigateTo)
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }

    const handleDelete = () => {
        deleteNote(id).then(res => {
            if (!res.error) {
              navigate('/')
            }
          })
          .catch(() => {
            alert(textApp.msg.error)
          })
    }

    useEffect(() => {
        getNote(id).then((res) => {
        if (!res.error) {
            setNote(res.data)
        } else {
            alert(textNote.notFound)
        }
        setLoading(false)
        })
        .catch(() => {
            alert(textApp.msg.error)
        })
    }, [])

    return (
        <section className="detail-page">
            { ('id' in note && !loading) ? (
                <>
                    <Link to="/" title={textApp.back}>
                        <HiArrowLeft />
                        {' '}
                        { textApp.back }
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
                    <NoteDetail archived={note.archived || false} handleArchive={handleArchive} handleDelete={handleDelete} />
                </>
            ) : ''}
            {(!('id' in note) && !loading) ? <NotFoundMessage /> : ''}
            {loading ? <LoadingIndicator /> : ''}
        </section>
    )
}

export default DetailNotePage;