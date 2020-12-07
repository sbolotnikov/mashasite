/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";
import ErrorNotice from "../misc/errorNotice";

function MemberNav(props) {
    const [isNavCollapsed, setIsNavCollpased] = useState(true);

    const history = useHistory();

    function handleNavCollpase() {
        setIsNavCollpased(!isNavCollapsed)
    }




    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#152a61" }}>
            <Link to="/" className="navHeader">
             Image logo
			</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
                onClick={handleNavCollpase}>
                <span className="nav-item"><i className="fas fa-music"></i></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                            Signup
                    </Link>

                    </li>

                    <li className="nav-item">
                        <Link to="/events" className="nav-link">
                            Events
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/steps" className="nav-link">
                            Social
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/DanceInspire" className="nav-link">
                            Dance Inspirations
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                    </Link>
                    </li>
                  
                   
                </ul>
            </div>
           
        </nav>
    );
}

export default MemberNav;