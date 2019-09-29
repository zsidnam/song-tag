import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SongTable from '../music/SongTable';
import { fetchLibrarySongs } from '../../store/actions/library-actions';
import {
    setCurrentSong,
    updatePlaylist
} from '../../store/actions/player-actions';

import '../../styles/library.scss';

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.isCurrentSong = this.isCurrentSong.bind(this);
    }

    async componentDidMount() {
        await this.props.dispatch(fetchLibrarySongs());

        // Set initial song into player if empty, set initial queue
        if (!this.props.currentSong && this.props.songs.length) {
            this.props.dispatch(setCurrentSong(this.props.songs[0]));
            this.props.dispatch(updatePlaylist(this.props.songs));
        }
    }

    isCurrentSong(songId) {
        if (!this.props.currentSong) {
            return false;
        }

        return songId === this.props.currentSong.id;
    }

    render() {
        return (
            <Fragment>
                <div id={'library-showcase'}>Some content goes here</div>
                <SongTable
                    songs={this.props.songs}
                    dispatch={this.props.dispatch}
                    isCurrentSong={this.isCurrentSong}
                />
            </Fragment>
        );
    }
}

Library.propTypes = {
    songs: PropTypes.array,
    currentSong: PropTypes.object
};

const mapStateToProps = state => {
    return {
        songs: state.library.songs,
        currentSong: state.player.currentSong
    };
};

export default connect(mapStateToProps)(Library);
