import React from 'react';
import { connect } from 'react-redux';

import {
    togglePlayPause,
    changeVolume,
    toggleLoop
} from '../../store/actions/player-actions';
import Controls from '../music/Controls';

import '../../styles/player.scss';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();

        this.handlePlayToggle = this.handlePlayToggle.bind(this);
        this.handleLoopToggle = this.handleLoopToggle.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    componentDidMount() {
        this._init();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.isPlaying !== prevProps.isPlaying ||
            this.props.currentSong !== prevProps.currentSong
        ) {
            this._handlePlayUpdate();
        }

        if (this.props.volume !== prevProps.volume) {
            this._handleVolumeUpdate();
        }
    }

    _init() {
        if (!this.audioRef.current) {
            console.log('ERROR! NOT READY TO INITIALIZE!');
            return;
        }

        this.audioRef.current.volume = this.props.volume;
    }

    _handlePlayUpdate() {
        // TODO: handle restarting song when double clicked
        if (this.props.isPlaying) {
            this.audioRef.current.play();
        } else {
            this.audioRef.current.pause();
        }
    }

    _handleVolumeUpdate() {
        this.audioRef.current.volume = this.props.volume;
    }

    _getAudioSrc() {
        return (this.props.currentSong && this.props.currentSong.src) || '';
    }

    handlePlayToggle() {
        if (!this._getAudioSrc()) {
            console.log('cannot play/pause; no audio source');
            return;
        }

        this.props.dispatch(togglePlayPause());
    }

    handleLoopToggle() {
        this.props.dispatch(toggleLoop());
    }

    handleVolumeChange(e) {
        this.props.dispatch(changeVolume(parseFloat(e.target.value)));
    }

    render() {
        return (
            <div id={'player-container'}>
                <audio
                    ref={this.audioRef}
                    src={this._getAudioSrc()}
                    loop={this.props.loop}
                    onEnded={() => {
                        // does not fire if loop is true
                        console.log('song ended');
                    }}
                />
                <Controls
                    isPlaying={this.props.isPlaying}
                    volume={this.props.volume}
                    loop={this.props.loop}
                    handlePlayToggle={this.handlePlayToggle}
                    handleVolumeChange={this.handleVolumeChange}
                    handleLoopToggle={this.handleLoopToggle}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { player } = state;
    return {
        currentSong: player.currentSong,
        isPlaying: player.isPlaying,
        volume: player.volume,
        loop: player.loop
    };
};

export default connect(mapStateToProps)(Player);
