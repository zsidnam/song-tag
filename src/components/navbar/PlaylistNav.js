import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { fetchPlaylists } from '../../store/actions/library-actions';

import styles from '../../styles/playlist-nav.module.scss';

class PlaylistNav extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPlaylists());
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Playlists</h1>
                {this.props.playlists.map(p => (
                    <div key={p.id}>
                        <NavLink exact to={`/playlists/${p.id}`}>
                            {p.title}
                        </NavLink>
                    </div>
                ))}
            </div>
        );
    }
}

PlaylistNav.propTypes = {
    playlists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => ({
    playlists: state.library.playlists
});

export default connect(mapStateToProps)(PlaylistNav);
