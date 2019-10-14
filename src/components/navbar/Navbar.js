import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import '../../styles/navbar.scss';

const Navbar = withRouter(props => {
    return (
        <div id={'nav-container'}>
            <nav>
                <div id={'logo-container'}>
                    <span className={'logo'}>{'< />'}</span>
                    <span>Song Tag</span>
                </div>
                <NavLink exact to={'/'} activeClassName={'active'}>
                    Home
                </NavLink>
                <NavLink exact to={'/albums'} activeClassName={'active'}>
                    Albums
                </NavLink>
                <NavLink exact to={'/playlists'} activeClassName={'active'}>
                    Playlists
                </NavLink>
            </nav>
        </div>
    );
});

export default Navbar;
