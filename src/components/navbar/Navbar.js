import React from 'react';
import { NavLink } from 'react-router-dom';

import PlaylistNav from './PlaylistNav';

import styles from '../../styles/navbar.module.scss';

const Navbar = () => {
    return (
        <div id={'nav-container'}>
            <nav className={styles.navBar}>
                <div className={styles.logoContainer}>
                    <span className={styles.logo}>{'< />'}</span>
                    <span>Song Tag</span>
                </div>
                <NavLink exact to={'/'} activeClassName={'active'}>
                    Home
                </NavLink>
                <NavLink exact to={'/albums'} activeClassName={'active'}>
                    Albums
                </NavLink>
                <PlaylistNav />
            </nav>
        </div>
    );
};

export default Navbar;
