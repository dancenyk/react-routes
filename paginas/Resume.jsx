import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume";

const Resume = () => {
    const arrays = [...studies, ...experiences];
    return (
        <>
            <h1>Sobre mi</h1>
            <ul>
                {arrays.map((array, index) => {
                    return (
                        <li key={index}>
                            <h2>{array.title}</h2>
                            <p>{array.institution}</p>
                            <p>{array.company}</p>
                            <p>{array.date}</p>
                        </li>
                    );
                })}
            </ul>
            <nav>
            
            </nav>
        </>
    );
};

export default Resume;
