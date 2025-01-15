import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="contact-btn">Contact Me</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <h1>
          Welcome to <span>My Portfolio</span>
        </h1>
        <p>
          Creative Developer with expertise in building amazing web experiences.
        </p>
        <div className="image-space">
          <img
            src="https://i2.wp.com/s.hdnux.com/photos/01/34/00/50/24119852/3/1200x0.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <button className="hire-btn">Hire Me</button>
        <div className="skills">
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">CSS</span>
          <span className="skill">Node.js</span>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img
              src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/12/josh_allen_bills_123019.jpg?strip=1"
              alt="Project 1"
              className="project-image"
            />
            <h3>Project One</h3>
          </div>
          <div className="project-card">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/ypi6kI0cOC5RIPna6.dM5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/cincinnati_bengals_wire_usa_today_sports_articles_393/8a57873551b95385b121b7bb2ec4c2c5"
              alt="Project 2"
              className="project-image"
            />
            <h3>Project Two</h3>
          </div>
          <div className="project-card">
            <img
              src="https://d.newsweek.com/en/full/2508299/ravens-qb-lamar-jackson.jpg?w=1200&f=38688fbbe012e2ad2e42f4f74ef4a18e"
              alt="Project 3"
              className="project-image"
            />
            <h3>Project Three</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
