import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import '../../styles/navbar.scss';

const Navbar = withRouter(props => {
    return (
        <div id={'nav-container'}>
            <nav>
                <NavLink exact to={'/'} activeClassName={'active'}>
                    Home
                </NavLink>
                <NavLink exact to={'/library'} activeClassName={'active'}>
                    Library
                </NavLink>
            </nav>
        </div>
    );
});

export default Navbar;
