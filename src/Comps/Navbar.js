import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/wod/new">Create WOD</Link>
        </nav>
    )

};

export default Navbar;