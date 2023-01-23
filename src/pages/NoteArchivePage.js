import React, { useEffect, useState } from "react";
import HomePageAction from "../components/action layout/HomePageAction";
import LoadingIndicator from "../components/action layout/Loading";
import NoteList from "../components/notes/NoteList";
import NoteListEmpty from "../components/notes/NoteEmpty";
import { getArchivedNotes } from "../utils/network-data";
import useInput from "../hooks/useInput";
import useLanguage from "../hooks/useLanguage";

function NoteArchivePage() {
    const [dataNotes, setDataNotes] = useState([]);
    const [initNotes, setInitNotes] = useState(false);
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useInput('');
    const text = useLanguage('archive');
    const textNote = useLanguage('note');
    const textApp = useLanguage('home');

    const initNotesFromApi = () => {
        getArchivedNotes().then((res) => {
            if (!res.error) {
               setDataNotes(res.data)
              setNotes(res.data)
               setInitNotes(true)
              setLoading(false)
            }
            })
        .catch(() => {
            alert(textApp.msg.error)
        })
    }

    useEffect(() => {
        if (!initNotes) {
            initNotesFromApi();
        }
        if (initNotes) {
            let tempDataNotes = [...dataNotes]
            if (search !== '') {
                tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
            }
            setNotes(tempDataNotes);
        }
    }, [search])


    return (
        <section className="homepage">
            <h2>{text.header}</h2>
            <section className="search-bar">
                <input type="text" placeholder={textNote.searchPlaceholder} value={search} onChange={setSearch}/>
            </section>
            {(notes.length > 0 && !loading) ? <NoteList notes={notes} /> : ''}
            {(notes.length === 0 && !loading) ? <NoteListEmpty /> : ''}
            {loading ? <LoadingIndicator /> : ''}
            <HomePageAction />
        </section>
    )
}

export default NoteArchivePage;