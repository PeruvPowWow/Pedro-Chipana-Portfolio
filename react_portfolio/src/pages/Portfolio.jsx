import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
      {
          title: "Project Title",
          image: "project-image.jpg",
          deployedLink: "https://example.com",
          repoLink: "https://github.com/example"
      },
  ];

  return (
    <section>
        <h2>Portfolio</h2>
        {projects.map((project, index) => (
            <Project key={index} project={project} />
        ))}
    </section>
  );
}

export default Portfolio;