import { LoginButton, LogoutButton } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="Navbar">
      <h1>AgroXpert</h1>

      {isAuthenticated && user.name}
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}

export default Navbar;
