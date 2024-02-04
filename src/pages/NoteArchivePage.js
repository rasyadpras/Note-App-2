import React from "react";
import { useEffect, useState } from "react";
import HomePageAction from "../components/action layout/HomePageAction";
import NoteList from "../components/notes/NoteList";
import NoteListEmpty from "../components/notes/NoteEmpty";
import { getArchivedNotes } from "../utils/local-data";

function NoteArchivePage() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };

    useEffect(() => {
        if (search !== '') {
          setNotes(
            getArchivedNotes()
              .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
          )
        } else {
          setNotes(getArchivedNotes())
        }
    }, [search])

    return (
        <section className="homepage">
            <h2>Archived</h2>
            <section className="search-bar">
                <input type="text" placeholder="Search by title ..." value={search} onChange={handleSearch}/>
            </section>
            {notes.length > 0 && <NoteList notes={notes} />}
            {notes.length === 0 && <NoteListEmpty />}
            <HomePageAction />
        </section>
    )
}

export default NoteArchivePage;