import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar">
            <NavLink exact to="/" 
                activeStyle={{color: "red"}}
                >Home
            </NavLink> | <NavLink to="/wod/new" 
                activeStyle={{color: "red"}}>Create WOD
            </NavLink>
        </nav>
    )

};

export default Navbar;