import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="heading">
                <h2>Portfolio</h2>
                <span>Our Recent Work</span>
            </div>
            <div className="portfolio-content">
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
                <div className="portfolio-img">
                    <img src="./src/assets/img/123.png" alt="Portfolio" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
