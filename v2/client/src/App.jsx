import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./components";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [history, isAuthenticated, user]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
