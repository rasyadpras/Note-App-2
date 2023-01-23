import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import useLanguage from "../../hooks/useLanguage";
import LanguageToggler from "./LanguageToggler";
import LogoutButton from "./LogoutButton";
import ThemeToggler from "./ThemeToggler";

function Navigation() {
    const { pathname } = useLocation();
    const { auth } = useContext(AuthContext);
    const text = useLanguage("home");

    return (
      <>
      {
        auth ? (
          <nav className="navigation">
            <ul>
              <li>
                {
                  pathname !== '/archives' ? (
                    <Link to="/archives" title={text.nav.archives}>
                      {text.nav.archives}
                    </Link>
                  ) : (
                    <Link to="/" title={text.nav.archives}>
                      {text.nav.home}
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        ) : ''
      }
      <LanguageToggler />
      <ThemeToggler />
      <LogoutButton />
      </>
    );
}

export default Navigation;