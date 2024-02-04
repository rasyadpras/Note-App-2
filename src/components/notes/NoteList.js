import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
    return (
        <section className="notes-list">
            {notes.map(note => (<NoteItem key={note.id} note={note} {...note}/>))}
        </section>
    )
}

NoteList.propTypes = {
    notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default NoteList;