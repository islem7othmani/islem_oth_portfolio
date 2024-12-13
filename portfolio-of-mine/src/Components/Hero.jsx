import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

import TrackVisibility from "react-on-screen";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer","UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (

    <>
    
   

      
    <section className="banner" id="home" style={styles.banner}>
      
      <Container className="text-center ">
        <TrackVisibility className="flex justify-center">
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""} class="flex justify-center">
              <img class="flex justify-center" src={headerImg} alt="Header" style={styles.image} />
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={styles.textContainer}>
              
              <h1>
                {`Hi! I'm Islem Othmani`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='["Software Engineer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
              I have a passion for crafting intuitive digital experiences and building innovative tools through code. I enjoy designing user-centered solutions and developing software that simplifies lives and solves real-world problems.
              </p>
              
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
    
    </>
  );
};

const styles = {
  banner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  textContainer: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  
};
