import React from "react";
import PropTypes from "prop-types";
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import PageAction from "../action layout/PageAction";
import useLanguage from "../../hooks/useLanguage";

function NoteDetail({ archived, handleArchive, handleDelete }) {
  const text = useLanguage("home");

  return (
    <PageAction page="detail-page">
      <>
        <button className="action" type="button" title={archived ? text.unarchive : text.archive} onClick={() => handleArchive()}>
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button className="action" type="button" title={text.delete} onClick={() => handleDelete()}>
          <HiOutlineTrash />
        </button>
      </>
    </PageAction>
  )
}

NoteDetail.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NoteDetail;