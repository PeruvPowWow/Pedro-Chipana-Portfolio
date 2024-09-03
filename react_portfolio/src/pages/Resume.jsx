import React from "react";

function Resume() {
    const frontEndProficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];
    const backEndProficiencies = ['Node.js', 'Express', 'ServerAPIs', 'SQL', 'Typescript'];

    return (
        <section>
            <h2>Resume</h2>
            <p>Download My<a href="file:///Users/pedrochipana/Downloads/Pedro%20Chipana%20Resume%202024.pdf" download> Resume</a></p>
        <div>
            <h3>Front-end Proficiencies</h3>
            <ul>
                {frontEndProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>

        <div>
            <h3>Back-end Proficiencies</h3>
            <ul>
                {backEndProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>
        </section>
    );
}

      

export default Resume;