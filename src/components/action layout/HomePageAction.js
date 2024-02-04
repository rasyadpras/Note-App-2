import React from "react";
import PageAction from "./PageAction";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function HomePageAction() {
    const navigate = useNavigate()
  
    return (
      <PageAction page="homepage">
        <button
          className="action"
          type="button"
          title="Add"
          onClick={() => navigate('/notes/new')}
        >
          <HiPlus />
        </button>
      </PageAction>
    )
}

export default HomePageAction;