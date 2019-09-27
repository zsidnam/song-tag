import React from 'react';
import { connect } from 'react-redux';

import { play, pause } from '../../store/actions/player-actions';

import '../../styles/player.scss';

class Player extends React.Component {
    constructor(props) {
        super(props);

        //TODO: move to redux
        this.state = {
            loopEnabled: false
        };

        this.audioRef = React.createRef();
        this.handlePlayToggle = this.handlePlayToggle.bind(this);
        this.handleLoopToggle = this.handleLoopToggle.bind(this);
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

    _handleControllerPlay() {
        if (!this.props.isPlaying) {
            this.props.dispatch(play());
        }
    }

    handlePlayToggle() {
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

    handleLoopToggle() {
        if (!this.state.loopEnabled) {
            this.setState({ loopEnabled: true });
        } else {
            this.setState({ loopEnabled: false });
        }
    }

    _getAudioSrc() {
        return (this.props.currentSong && this.props.currentSong.src) || '';
    }

    render() {
        return (
            <div id={'player-container'}>
                <audio
                    ref={this.audioRef}
                    src={this._getAudioSrc()}
                    loop={this.state.loopEnabled}
                    onPause={() => {
                        console.log('paused');
                    }}
                    onPlay={() => {
                        console.log('played');
                    }}
                    onEnded={() => {
                        console.log('song ended');
                    }}
                />
                <button onClick={this.handlePlayToggle}>
                    {this.props.isPlaying ? '||' : '|>'}
                </button>
                <button onClick={this.handleLoopToggle}>
                    {this.state.loopEnabled ? 'Loop on' : 'Loop off'}
                </button>
            </div>
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
