import React from "react";
import imgAboutMe from "../img/img-about-me.jpg";
import imgReact from "../img/react-logo.webp";
import imgHTML from "../img/html.png";
import imgCSS from "../img/css.png";
import imgJS from "../img/js.jpg";
import imgPHP from "../img/php.png";
import imgSQL from "../img/sql.png";
import imgMongo from "../img/mongodb.png";
import imgGithub from "../img/github.png";
import imgGit from "../img/git.png";



const About = () => {
  return (
    <div className="container-padre-about">
      <div className="container-about">
        <div className="container-img-title-about">
          <h2 className="title-about">Learn About Me</h2>
          <img src={imgAboutMe} alt="" className="img-about" />
        </div>

        <container className="description-about">
          <h2 className="title-description-about">
            FullStack Programmer / System Technician
          </h2>

          <div className="description-bullets">
            <div className="description-row-1">
              <li>Birthdate: October 28th 2002</li>
              <li>Phone: +54 11 27535916</li>
              <li>City: Buenos Aires, Arg</li>
            </div>
            <div className="description-row-2">
              <li>Age: 21</li>
              <li>Degree: System Technician</li>
              <li>Email: navarrolucas4668@gmail.com</li>
            </div>
          </div>

          <p className="description-long-about">
            I am Lucas, a 21-year-old, I graduate with a degree in Systems
            Analysis from the Juan Amós Comenio Institute of Higher Education. I
            am a person passionate about technology, more focused on the
            programming area. I am looking for opportunities to apply my
            acquired knowledge in the IT sector as a full stack programmer.
          </p>
        </container>
      </div>

      <div className="skills-about">

        <div className="skills-about-cards">
          <div className="skills-about-card">
            <img src={imgHTML} alt="" className="skills-img" />
            <p className="skills-name">HTML</p>
          </div>
          <div className="skills-about-card">
            <img src={imgReact} alt="" className="skills-img" />
            <p className="skills-name">REACT JS</p>
          </div>
          <div className="skills-about-card">
            <img src={imgCSS} alt="" className="skills-img" />
            <p className="skills-name">REACT JS</p>
          </div>
          <div className="skills-about-card">
            <img src={imgJS} alt="" className="skills-img" />
            <p className="skills-name">JAVASCRIPT</p>
          </div>
          <div className="skills-about-card">
            <img src={imgPHP} alt="" className="skills-img" />
            <p className="skills-name">PHP</p>
          </div>
          <div className="skills-about-card">
            <img src={imgSQL} alt="" className="skills-img" />
            <p className="skills-name">SQL</p>
          </div>
          <div className="skills-about-card">
            <img src={imgMongo} alt="" className="skills-img" />
            <p className="skills-name">Mongo</p>
          </div>
          <div className="skills-about-card">
            <img src={imgGithub} alt="" className="skills-img" />
            <p className="skills-name">Github</p>
          </div>
          <div className="skills-about-card">
            <img src={imgGit} alt="" className="skills-img" />
            <p className="skills-name">Github</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default About;
