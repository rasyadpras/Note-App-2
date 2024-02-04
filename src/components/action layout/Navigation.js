import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const { pathname } = useLocation()
    return (
      <nav className="navigation">
        <ul>
          <li>
            {pathname !== '/archives'
              ? <Link to="/archives" title="Archives">Archive Notes</Link>
              : <Link to="/" title="Home">Home</Link>}
  
          </li>
        </ul>
      </nav>
    )
}

export default Navigation;