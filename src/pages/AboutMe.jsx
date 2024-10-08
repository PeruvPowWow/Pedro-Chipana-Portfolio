// import React from "react";

import './AboutMe.css';
import profileImage from '../assets/images/profile.jpg'; // Import the image

function AboutMe() {
    return (
        <section className="about-me">
            <h2>About Me</h2>
            <img src={profileImage} alt="Pedro Chipana" />
            <p className="paragraph">
                Hello! My name is Pedro, and I graduated from the University of Utah with a focus on pursuing a career in the health industry. However, unforeseen circumstances necessitated a shift in my career path. Over the past few years, I have worked in the technology sector, primarily in sales. Although I had not initially envisioned a long-term career in this field, I have consistently been intrigued by both front-end and back-end development processes. I believe now is the opportune time to embark on this new journey and further explore my passion for development.
            </p>
            <p className="paragraph">
                In addition to my professional experiences, I have actively engaged in various online courses and coding boot camps to hone my skills. This continuous learning has not only equipped me with a solid foundation in programming but also fueled my enthusiasm for creating innovative solutions. I am excited to leverage this knowledge and transition into a role where I can contribute to dynamic projects and collaborate with like-minded professionals in the tech industry. I have a passion for creating dynamic and responsive web applications. I have experience in front-end and back-end technologies, including React, Node.js, and more. I am always eager to learn new skills and improve my craft.
            </p>
        </section>
    );
}

export default AboutMe;
