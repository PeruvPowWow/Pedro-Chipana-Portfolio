// import React from "react";
import Project from "../components/Project";
import image1 from "../assets/images/digital-marketing-meeting.jpg";
import image2 from "../assets/images/Employment Payroll Tracker.jpg";
import image3 from "../assets/images/100-web-apis-challenge-demo.gif";
import image4 from "../assets/images/projectpalheader-dark.jpg";
import './portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: "HTML/CSS Code Project",
      image: image1,
      deployedLink: "https://peruvpowwow.github.io/HTML-CSS-Code-Project/",
      repoLink: "https://github.com/PeruvPowWow/homework-challenge-1/tree/main",
    },
    {
      title: "Employee Payroll Tracker",
      image: image2,
      deployedLink: "https://peruvpowwow.github.io/Employment-Payroll-Tracker/",
      repoLink: "https://github.com/PeruvPowWow/Employment-Payroll-Tracker",
    },
    {
      title: "My First Blog",
      image: image3,
      deployedLink: "https://peruvpowwow.github.io/My-First-Blog/",
      repoLink: "https://github.com/PeruvPowWow/My-First-Blog",
    },
    {
      title: "ProjectPAL",
      image: image4,
      deployedLink: "https://peruvpowwow.github.io/ProjectPAL/",
      repoLink: "https://github.com/PeruvPowWow/ProjectPal",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className = "portfolio-grid">
      {projects.map((project, index) => (
        <Project
           key={index}
           title={project.title}
           image={project.image}
           deployedLink={project.deployedLink}
           repoLink={project.repoLink} 
           />
      ))}
      </div>
    </section>
  );
}

export default Portfolio;
