import React from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import Navigation from "./Navigation";

function HeaderComponent() {
    const text = useLanguage("home");

    return (
        <header>
            <h1><Link to="/">{text.title}</Link></h1>
            <Navigation />
        </header>
    );
}

export default HeaderComponent;