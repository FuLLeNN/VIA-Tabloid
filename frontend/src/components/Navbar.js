import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    /*
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile/123">Profile</Link>
                </li>
                     */
                }
                 <li>
                    <Link to="/newPost">New Post</Link>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;