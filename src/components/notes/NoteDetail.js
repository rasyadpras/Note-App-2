import React from "react";
import PropTypes from "prop-types";
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import PageAction from "../action layout/PageAction";

function NoteDetail({ archived, handleEdit, handleArchive, handleDelete }) {
  return (
    <PageAction page="detail-page">
      <>
        <button className="action" type="button" title="Edit" onClick={() => handleEdit()}>
          <AiOutlineEdit />
        </button>
        <button className="action" type="button" title={archived ? 'Unarchive' : 'Archive'} onClick={() => handleArchive()}>
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button className="action" type="button" title="Delete" onClick={() => handleDelete()}>
          <HiOutlineTrash />
        </button>
      </>
    </PageAction>
  )
}

NoteDetail.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NoteDetail;