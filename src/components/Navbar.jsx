import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="nav">
            <h2>Welcome to My Portfolio</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a
                    href="/Kurra_Suresh_Frontend_Developer_Resume.pdf"
                    download
                    className="resume-button"

                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
export default Navbar;