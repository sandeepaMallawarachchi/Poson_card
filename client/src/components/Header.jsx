import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../images/logo.png'

function Header() {
    return (
        <nav class="navbar bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={'/'}><img className='logo' src={logo} /></Link>
                <Link className="navbar-brand" to={'/'}>Poson Card</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;