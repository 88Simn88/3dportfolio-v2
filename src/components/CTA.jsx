import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Have a project in mind? <br className="sm:block hidden" />
                Let´s build something together!
            </p>
            <a href="../file/resume-sim.pdf" target="_blank">
                <button className="btn">Download Resume</button>
            </a>
            <Link to="/contact" className="btn">
                Contact
            </Link>
        </section>
    )
}

export default CTA