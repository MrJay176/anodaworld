import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = () => {   
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Anoda World <i class="fab fa-typo3"></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;
