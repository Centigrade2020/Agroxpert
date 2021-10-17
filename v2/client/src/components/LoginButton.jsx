import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="authButton"
      onClick={() => loginWithRedirect().then((res) => {})}
    >
      Log in
    </button>
  );
}

export default LoginButton;
