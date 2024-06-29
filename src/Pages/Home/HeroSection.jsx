import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function HeroSection() {

  const [navActive, setNavActive] = useState(false);

  const closeMenu = () => {
    setNavActive(false);
  };

    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hello, everyone!</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">I'm William Hilmy Susatyo </span>{" "}
              <br />
              
            </h1>
            <p className="hero--section-description1">
              Penultimate Year Computer Science Undergraduate Student
              <br></br>
              <br></br>
              Currently aspired in <b>Data Science</b>, 
              <br></br><b>Cloud Computing</b>, and <b>Software Engineering</b>
            </p>
          </div>

          <br>
          </br>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="navbar--content"
          >
        <button className="btn btn-primary"> Get In Touch 📞 </button>

      </Link>
      <a href="https://drive.google.com/file/d/100MaPBak6mtF-_d5tE4Mq5BV7ysqplfa/view?usp=sharing"
           className="navbar--content"
           target="_blank"
           rel="noreferrer"
        >
        <button className="btn btn-github"> Resume 📝 </button>
      </a>

        </div>
        <div className="hero--section--img">
          <img src="./img/head-image.png" alt="Hero Section" />
        </div>
      </section>
    );
  }