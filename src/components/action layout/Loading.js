import React from "react";
import useLanguage from "../../hooks/useLanguage";

function LoadingIndicator() {
    const text = useLanguage("home");

    return (
        <p className="loading-indicator">{text.msg.loading}</p>
    );
}

export default LoadingIndicator;