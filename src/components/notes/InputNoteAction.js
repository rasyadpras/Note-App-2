import React from "react";
import PropTypes from "prop-types";
import PageAction from "../action layout/PageAction";
import { HiX, HiCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function InputNoteAction({ handleSave }){
    const navigate = useNavigate();

    return (
        <PageAction page="add-new-page">
          <>
            <button className="action" type="button" title="Cancel" onClick={() => navigate('/')}>
              <HiX />
            </button>
            <button className="action" type="button" title="Add" onClick={() => handleSave()}>
              <HiCheck />
            </button>
          </>
        </PageAction>
      )
}

InputNoteAction.propTypes = {
    handleSave: PropTypes.func.isRequired
}

export default InputNoteAction;