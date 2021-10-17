import agroxpert from "../../assets/agroxpert.png"
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mainHome">
    <div className="home">
<div className="homeText">
      <h1>An open source <br /> <span>Crop prediction portal</span></h1>
      <br/>
      <p>Better and more accurate than self-predicted results<br/>
       as <span>AgroXpert</span> uses databases with data recorded over 20 years</p>
       <button 
       className="homeGS" 
       onClick={() => loginWithRedirect().then((res) => {})}>
        Get Started
        </button>
       <a className="github" href="https://github.com/Centigrade2020/Agroxpert"
        target="_blank">
          Star us on github
          </a>
      </div>
      <img src={agroxpert}></img>
     
    </div>
    <div className="faq">

    </div>
    </div>
  );
}

export default Home;
