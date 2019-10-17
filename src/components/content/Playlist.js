import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SongTable from './SongTable';
import Loading from '../common/Loading';

import { fetchPlaylist } from '../../store/actions/library-actions';
import {
    requestNewSong,
    updatePlaylist
} from '../../store/actions/player-actions';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.isCurrentSong = this.isCurrentSong.bind(this);
        this.playSong = this.playSong.bind(this);
    }

    componentDidMount() {
        this._loadPlaylist();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this._loadPlaylist();
        }
    }

    _loadPlaylist() {
        const playlistId = parseInt(this.props.match.params.id);
        this.props.dispatch(fetchPlaylist(playlistId));
    }

    isCurrentSong(songId) {
        if (!this.props.currentSong) {
            return false;
        }

        return (
            songId === this.props.currentSong.id &&
            this.props.currentSong.playContext === 'playlist'
        );
    }

    playSong(song) {
        // TODO: Need way to tell that album is already current playlist.
        // Don't update playlist if album is already set as playlist.

        //TODO: Restart song if currently being played

        this.props.dispatch(updatePlaylist(this.props.playlist.songs));
        this.props.dispatch(requestNewSong(song));
    }

    playPlaylist() {
        if (!(this.props.playlist.songs || []).length) {
            console.log('No songs to play for this album.');
            return;
        }

        this.playSong(this.props.playlist.songs[0]);
    }

    render() {
        if (this.props.isUpdating) {
            return <Loading />;
        }

        return (
            <Fragment>
                <div>{this.props.playlist.title}</div>
                <SongTable
                    songs={this.props.playlist.songs || []}
                    dispatch={this.props.dispatch}
                    isCurrentSong={this.isCurrentSong}
                    playSong={this.playSong}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        playlist: state.library.playlist,
        currentSong: state.player.currentSong,
        isUpdating: state.library.isUpdating
    };
};

export default connect(mapStateToProps)(Playlist);
