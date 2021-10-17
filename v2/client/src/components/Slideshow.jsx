import {useEffect, useState,useRef} from "react";
import q from "../assets/1.jpg";
import w from "../assets/2.png";
import e from "../assets/3.jpg";
import r from "../assets/4.jpg";
import t from "../assets/5.jpg";
import y from "../assets/6.jpg";
import 'react-slideshow-image/dist/styles.css'

const colors = [q,r,e,t,w,y];

const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundImage, index) => (
          <img
            className="slide"
            key={index}
            src={ backgroundImage}
          />
        ))}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
export default Slideshow;
