import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Skills() {
    return (
        <div className="page">
            <h2>Skills</h2>

            <ul className="skills-list">
                <li><FaReact /> React.js & Hooks</li>
                <li><FaJsSquare /> JavaScript (ES6+)</li>
                <li><FaHtml5 /> HTML5</li>
                <li><FaCss3Alt /> CSS3</li>
                <li><SiRedux /> Redux & Context API</li>
                <li><FaGitAlt /> Git</li>
                <li><FaGithub /> GitHub</li>
                <li>REST APIs</li>
            </ul>
        </div>
    );
}

export default Skills;
