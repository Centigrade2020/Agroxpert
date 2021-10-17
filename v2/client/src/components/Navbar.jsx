import { LoginButton, LogoutButton } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="Navbar">
      <div className="logo">
        <h1>AgroXpert</h1>
      </div>
      <div className="navRight">
        
        {isAuthenticated && <p>{user.nickname}</p>}
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </div>
    </div>
  );
}

export default Navbar;
