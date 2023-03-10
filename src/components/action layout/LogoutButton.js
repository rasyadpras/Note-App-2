import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import AuthContext from "../../contexts/AuthContext";

function LogoutButton() {
    const { auth } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        window.location = "/"
    }

    return (
        <>
        {
            auth ? (
            <button type="button" title="Logout" className="button-logout" onClick={handleLogout}>
                <MdLogout />
            </button>
            ) : ''
        }
        </>
    );
}

export default LogoutButton;