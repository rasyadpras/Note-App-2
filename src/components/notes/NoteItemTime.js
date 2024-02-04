import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

function NoteItemTime({ timestamp }) {
    return (
      <p className="note-item__createdAt">
        { showFormattedDate(timestamp) }
      </p>
    )
  }
  
  NoteItemTime.propTypes = {
    timestamp: PropTypes.string.isRequired
  }
  
  export default NoteItemTime;