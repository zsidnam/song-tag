import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CurrentInfo from '../music/CurrentInfo';
import Controls from '../music/Controls';
import SecondaryControls from '../music/SecondaryControls';

import {
    togglePlayPause,
    changeVolume,
    toggleLoop,
    nextSong,
    prevSong
} from '../../store/actions/player-actions';

import '../../styles/player.scss';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();

        this.handlePlayToggle = this.handlePlayToggle.bind(this);
        this.handleLoopToggle = this.handleLoopToggle.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
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

    handleNext() {
        this.props.dispatch(nextSong());
    }

    handlePrev() {
        if (!this._getAudioSrc()) {
            console.log('cannot read playback time; no audio source');
            return;
        }

        if (this.audioRef.current.currentTime < 3) {
            this.props.dispatch(prevSong());
        } else {
            // Reset song if prev is clicked in middle of playback
            this.audioRef.current.currentTime = 0;
        }
    }

    render() {
        return (
            <Fragment>
                <audio
                    ref={this.audioRef}
                    src={this._getAudioSrc()}
                    loop={this.props.loop}
                    onEnded={this.handleNext}
                />
                <div id={'player-container'}>
                    <CurrentInfo currentSong={this.props.currentSong} />
                    <Controls
                        isPlaying={this.props.isPlaying}
                        volume={this.props.volume}
                        loop={this.props.loop}
                        handlePlayToggle={this.handlePlayToggle}
                        handleVolumeChange={this.handleVolumeChange}
                        handleLoopToggle={this.handleLoopToggle}
                        handleNext={this.handleNext}
                        handlePrev={this.handlePrev}
                    />
                    <SecondaryControls
                        volume={this.props.volume}
                        handleVolumeChange={this.handleVolumeChange}
                    />
                </div>
            </Fragment>
        );
    }
}

// TODO: Set up map actions to props

const mapStateToProps = state => {
    const { player } = state;
    return {
        currentSong: player.currentSong,
        isPlaying: player.isPlaying,
        volume: player.volume,
        loop: player.loop,
        playlist: player.playlist,
        queue: player.queue,
        playlistPosition: player.playlistPosition
    };
};

export default connect(mapStateToProps)(Player);
