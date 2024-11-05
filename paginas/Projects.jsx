import { Link } from "react-router-dom";
import projects from "../src/data/projects";

const Projects = () => {
    return (
        <>
            <h1>My projects</h1>
            <ul>
                {projects.map((project) => {
                    const { id, name, image, description, url } = project;
                    return (
                        <li key={id} className="projects">
                            <h2>{name}</h2>
                            <img src={image} alt={name} />
                            <p>{description}</p>
                            <a href={url} target="_blank" rel="noopener noreferrer">Enlace</a>
                        </li>
                    );
                })}
            </ul>
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </>
    );
};

export default Projects;
