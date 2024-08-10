import React from "react";
import "./Skills.css";

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="heading">
                <h2>Skills</h2>
                <span>My Skills</span>
            </div>
            <div className="skills-container">
                <div className="bars">
                    <div className="bars-box">
                        <h3>Web Design & Development</h3>
                        <span>95%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar web-bar"></div>
                    </div>
                    <div className="bars-box">
                        <h3>App Design & Development</h3>
                        <span>65%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar app-bar"></div>
                    </div>
                    <div className="bars-box">
                        <h3>Database Management</h3>
                        <span>70%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar db-bar"></div>
                    </div>
                    <div className="bars-box">
                        <h3>MERN Stack</h3>
                        <span>60%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar mern-bar"></div>
                    </div>
                </div>
                <div className="skills-img">
                    <img src="./src/assets/img/123.png" alt="Skills" />
                </div>
            </div>
        </section>
    );
}

export default Skills;
