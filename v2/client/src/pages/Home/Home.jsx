import agroxpert from "../../assets/agroxpert.png";
import { useAuth0 } from "@auth0/auth0-react";


import Slideshow from "../../components/Slideshow";



function Home() {
  
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="mainHome">
      <div className="homeBG">
        <div className="home">
          <div className="homeText">
            <h1>
              An open source <br /> <span>Crop prediction portal</span>
            </h1>
            <br />
            <p>
              Better and more accurate than self-predicted results
              <br />
              as <span>AgroXpert</span> uses databases with data recorded over
              20 years
            </p>
            <button
              className="homeGS"
              onClick={() => loginWithRedirect().then((res) => { })}
            >
              Get Started
            </button>
            <a
              className="github"
              href="https://github.com/Centigrade2020/Agroxpert"
              target="_blank"
            >
              Star us on github
            </a>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/90xHRMePOAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div className="home1">
      <Slideshow></Slideshow>
      <div className="homeText1">
      <h1>Why Agroxpert?  </h1><br/>
        <p>Agriculture is the backbone of a country's economy and quality <br/>
        agriculture can benchmark a country's position in the global market for common good. <br/>
        Using <span>Agroxpert</span>, our farmers will be able to obtain accurate crop cultivation predictions,<br/>
        as our application has been constructed on data collected over 20 years. <br/>
        Precision in judgement can increase overall yield,<br/> 
        reduce losses and boost crop value in the market.</p>
        </div>
   

        </div>
      </div>
  
  );
}

export default Home;
