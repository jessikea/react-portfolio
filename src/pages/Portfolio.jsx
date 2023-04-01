import React from "react";
import projects from "../projects-info";


const Portfolio = () => {
    return(
        <div className="projects-container" id= "projects">
            <h1>Projects</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={project.id}>
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-info">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                                <a href={project.deployed} target="_blank" rel="noreferrer">Deployed</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    )
}

export default Portfolio;