import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav>

            <Link to="/">Home</Link>
            <br/>
            <Link to="/wod/new">Creat WOD</Link>

        </nav>
    )

};

export default Navbar;