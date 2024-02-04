import React from "react";
import { Link } from "react-router-dom";

function IndexPage() {
    return (
      <p>
        Go to
        {' '}
        <Link to="/">Home page</Link>
      </p>
    )
}

export default IndexPage;  