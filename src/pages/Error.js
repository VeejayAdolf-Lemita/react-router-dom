import { Link } from "react-router-dom";

const Error = () => {
    return(
        <section className="section">
            <h2>Page Not Found</h2>
            <Link to='/'>HOME</Link>
        </section>
    )
}

export default Error;