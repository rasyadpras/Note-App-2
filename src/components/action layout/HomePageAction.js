import React from "react";
import PageAction from "./PageAction";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";

function HomePageAction() {
    const navigate = useNavigate();
    const text = useLanguage("home");
  
    return (
      <PageAction page="homepage">
        <button className="action" type="button" title={text.add} onClick={() => navigate('/notes/new')}>
          <HiPlus />
        </button>
      </PageAction>
    )
}

export default HomePageAction;