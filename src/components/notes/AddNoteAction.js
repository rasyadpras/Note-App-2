import React from "react";
import PropTypes from "prop-types";
import PageAction from "../action layout/PageAction";
import { HiX, HiCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

function AddNoteAction({ handleSave }){
    const navigate = useNavigate();
    const text = useLanguage("home");

    return (
        <PageAction page="add-new-page">
          <>
            <button className="action" type="button" title={text.cancel} onClick={() => navigate('/')}>
              <HiX />
            </button>
            <button className="action" type="button" title={text.add} onClick={() => handleSave()}>
              <HiCheck />
            </button>
          </>
        </PageAction>
      )
}

AddNoteAction.propTypes = {
    handleSave: PropTypes.func.isRequired
}

export default AddNoteAction;