import {Link } from 'react-router-dom'

function Nav({}) {
    return (

            <nav className="navbar">
                <div className="navbar-logo">{}</div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/image-api">Image API</Link></li>
                </ul>
            </nav>
    )
}

export default Nav