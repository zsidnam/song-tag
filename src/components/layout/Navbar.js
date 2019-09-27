import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar.scss';

const Navbar = props => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/library'}>Library</Link>
        </nav>
    );
};

export default Navbar;
