import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { play, pause } from '../../store/actions/player-actions';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    }

    // convert this to hook
    componentDidUpdate(prevProps) {
        if (
            this.props.isPlaying !== prevProps.isPlaying ||
            this.props.currentSong !== prevProps.currentSong
        ) {
            this._handlePlayUpdate();
        }
    }

    _handlePlayUpdate() {
        // TODO: handle restarting song when double clicked
        if (this.props.isPlaying) {
            this.audioRef.current.play();
        } else {
            this.audioRef.current.pause();
        }
    }

    handlePlayPauseClick() {
        if (!this.audioRef.current || !this._getAudioSrc()) {
            console.log('cannot play/pause; no audio source');
            return;
        }

        if (!this.props.isPlaying) {
            this.props.dispatch(play());
        } else {
            this.props.dispatch(pause());
        }
    }

    _getAudioSrc() {
        return (this.props.currentSong && this.props.currentSong.src) || '';
    }

    render() {
        return (
            <Fragment>
                <audio ref={this.audioRef} src={this._getAudioSrc()} />
                <button onClick={this.handlePlayPauseClick}>
                    {this.props.isPlaying ? 'Pause' : 'Play'}
                </button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { player } = state;
    return {
        currentSong: player.currentSong,
        isPlaying: player.isPlaying
    };
};

export default connect(mapStateToProps)(Player);
