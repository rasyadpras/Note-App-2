import React from 'react';
import PropTypes from "prop-types";
import NoteItemTitle from './NoteItemTitle';
import NoteItemTime from './NoteItemTime';
import NoteItemBody from './NoteItemBody';

function NoteItem ({ note }) {
  return (
    <article className="note-item">
      <NoteItemTitle id={note.id} title={note.title}/>
      <NoteItemTime timestamp={note.createdAt}/>
      <NoteItemBody body={note.body}/>
    </article>
  );
}

NoteItem.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired
}
 
export default NoteItem;