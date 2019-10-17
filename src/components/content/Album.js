import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SongTable from './SongTable';
import Loading from '../common/Loading';

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
        this.playAlbum = this.playAlbum.bind(this);
    }

    componentDidMount() {
        this._loadAlbum();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this._loadAlbum();
        }
    }

    _loadAlbum() {
        const albumId = parseInt(this.props.match.params.id);
        this.props.dispatch(fetchAlbum(albumId));
    }

    isCurrentSong(songId) {
        if (!this.props.currentSong) {
            return false;
        }

        return (
            songId === this.props.currentSong.id &&
            this.props.currentSong.playContext === 'album'
        );
    }

    playSong(song) {
        // TODO: Need way to tell that album is already current playlist.
        // Don't update playlist if album is already set as playlist.

        //TODO: Restart song if currently being played

        this.props.dispatch(updatePlaylist(this.props.album.songs));
        this.props.dispatch(requestNewSong(song));
    }

    playAlbum() {
        if (!(this.props.album.songs || []).length) {
            console.log('No songs to play for this album.');
            return;
        }

        this.playSong(this.props.album.songs[0]);
    }

    render() {
        if (this.props.isUpdating) {
            return <Loading />;
        }

        return (
            <Fragment>
                <div className={'summary'}>
                    <img
                        src={this.props.album.artSrc}
                        alt={`Album Art: ${this.props.album.title}`}
                    />
                    <div className={'titles'}>
                        <h1>{this.props.album.title}</h1>
                        <h2>{this.props.album.artistName}</h2>
                        <button onClick={this.playAlbum}>PLAY</button>
                    </div>
                </div>
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
    currentSong: state.player.currentSong,
    isUpdating: state.library.isUpdating
});

export default connect(mapStateToProps)(Album);
