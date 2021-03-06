import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button className="authButton" onClick={() => logout()}>
      Logout
    </button>
  );
}

export default LogoutButton;
