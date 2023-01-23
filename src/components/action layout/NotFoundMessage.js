import React from "react";
import useLanguage from "../../hooks/useLanguage";

function NotFoundMessage() {
    const text = useLanguage("home");

    return (
        <>
            <h2>404</h2>
            <p>{text.pageNotFound}</p>
        </>
    )
}

export default NotFoundMessage;