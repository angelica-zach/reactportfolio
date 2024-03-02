import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/skills.css";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="skills" />
        <div className="content-wrapper">
          <div className="contact-container">
            <div className="title contact-title">My Skills</div>
            <div className="subtitle contact-subtitle">
              I have worked with various programming languages and frameworks
              with my projects , and look to keep devloping my understanding of
              these aswell as picking up new technologies to ensure my work is
              up to the highest standard.{" "}
            </div>
            <div className="section-content-container">
              <br />
              <div className="container-skills">
                <h3 className="title-skills">Languages</h3>
                <div className="skill-box">
                  <p>CSS</p>
                  <p>HTML</p>
                  <p>JavaScript</p>
                  <p>C</p>
                </div>
              </div>
              <div className="container-skills">
                <h3 className="title-skills">Frameworks + Technologies</h3>
                <div className="skill-box">
                  <p>React</p>
                  <p>Matlab</p>
                  <p>JQuery</p>
                  <p>Node.js</p>
                </div>
              </div>
              <div className="container-skills">
                <h3 className="title-skills">Tools + Platforms</h3>
                <div className="skill-box">
                  <p>Bootsrap</p>
                  <p>Figma</p>
                  <p>Notion</p>
                  <p>Jira</p>
                  <p>Netlify</p>
                  <p>GitHub</p>
                </div>
              </div>
              <div className="container-skills">
                <h3 className="title-skills">Other</h3>
                <div className="skill-box">
                  <p>Fluent in Polish</p>
                  <p>Microsoft Office</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
