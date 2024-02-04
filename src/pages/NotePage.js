import React from "react";
import { useEffect, useState } from "react";
import HomePageAction from "../components/action layout/HomePageAction";
import NoteList from "../components/notes/NoteList";
import NoteListEmpty from "../components/notes/NoteEmpty";
import { getActiveNotes } from "../utils/local-data";

function NotePage() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };

    useEffect(() => {
        if (search !== '') {
          setNotes(
            getActiveNotes()
              .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
          )
        } else {
          setNotes(getActiveNotes())
        }
    }, [search])

    return (
        <section className="homepage">
            <h2>Notes</h2>
            <section className="search-bar">
                <input type="text" placeholder="Search by title ..." value={search} onChange={handleSearch}/>
            </section>
            {notes.length > 0 && <NoteList notes={notes} />}
            {notes.length === 0 && <NoteListEmpty />}
            <HomePageAction />
        </section>
    )
}

export default NotePage;