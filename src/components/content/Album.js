import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SongTable from './SongTable';

import { fetchAlbum } from '../../store/actions/library-actions';
import {
    requestNewSong,
    updatePlaylist
} from '../../store/actions/player-actions';

import '../../styles/album.scss';

class Album extends React.Component {
    constructor(props) {
        super(props);

        this.isCurrentSong = this.isCurrentSong.bind(this);
        this.playSong = this.playSong.bind(this);
    }

    componentDidMount() {
        const albumId = parseInt(this.props.match.params.id);
        this.props.dispatch(fetchAlbum(albumId));
    }

    // TODO: Get rid of this duplicate method and move elsewhere
    isCurrentSong(songId) {
        if (!this.props.currentSong) {
            return false;
        }

        return songId === this.props.currentSong.id;
    }

    playSong(song) {
        // TODO: Need way to tell that album is already current playlist.
        // Don't update playlist if album is already set as playlist.
        this.props.dispatch(updatePlaylist(this.props.album.songs));
        this.props.dispatch(requestNewSong(song));
    }

    render() {
        return (
            <Fragment>
                <img
                    src={this.props.album.artSrc}
                    alt={`Album Art: ${this.props.album.title}`}
                />
                <SongTable
                    songs={this.props.album.songs || []}
                    dispatch={this.props.dispatch}
                    isCurrentSong={this.isCurrentSong}
                    playSong={this.playSong}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    album: state.library.album,
    currentSong: state.player.currentSong
});

export default connect(mapStateToProps)(Album);
