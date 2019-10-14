import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'throttle-debounce';

import CurrentInfo from './CurrentInfo';
import Controls from './Controls';
import SecondaryControls from './SecondaryControls';

import {
    togglePlayPause,
    changeVolume,
    toggleLoop,
    nextSong,
    prevSong,
    handlePlayError,
    toggleQueueDisplay
} from '../../store/actions/player-actions';

import '../../styles/player.scss';

class Player extends React.Component {
    constructor(props) {
        super(props);

        // Because of the complexity of the scan control, I am
        // keeping it in local state instead of controlling through
        // Redux. We need to both read the playback position from the audio
        // player by subscribing to the timeUpdate event and allow the user
        // to scan through the audio file. This can definitely be refined in
        // the future.
        this.state = {
            playbackPosition: 0,
            scanLocked: false
        };

        this.audioRef = React.createRef();

        this.handlePrev = this.handlePrev.bind(this);
        this.handleScanChange = this.handleScanChange.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleScanHold = this.handleScanHold.bind(this);
        this.handleScanRelease = this.handleScanRelease.bind(this);
        this.debouncedUpdatePlaybackPosition = throttle(
            1000,
            this._updatePlaybackPosition
        );
    }

    componentDidMount() {
        this._init();
    }

    componentDidUpdate(prevProps) {
        // Since we have to access the underlying audio element to change
        // playState, volume, etc, we need to check for prop updates and apply
        // corresponding actions to the audio element as needed
        const songChanged = this.props.currentSong !== prevProps.currentSong;
        const playStateChanged = this.props.isPlaying !== prevProps.isPlaying;
        const volumeChanged = this.props.volume !== prevProps.volume;

        if (playStateChanged || songChanged) {
            this._changePlayState();
        }

        if (volumeChanged) {
            this._changeVolume();
        }
    }

    /* PRIVATE FUNCTIONS WITH ACCESS TO AUDIO PLAYER */
    /* --------------------------------------------- */
    _init() {
        this.audioRef.current.volume = this.props.volume;
    }

    async _changePlayState() {
        try {
            if (this.props.isPlaying) {
                return await this.audioRef.current.play();
            }

            return await this.audioRef.current.pause();
        } catch (err) {
            return this.props.handlePlayError();
        }
    }

    _changeVolume() {
        this.audioRef.current.volume = this.props.volume;
    }

    _restartSong() {
        this.audioRef.current.currentTime = 0;
    }

    _setPlaybackPosition() {
        this.audioRef.current.currentTime = this.state.playbackPosition;
    }

    _updatePlaybackPosition() {
        if (this.state.scanLocked) {
            return;
        }

        this.setState({
            playbackPosition: parseInt(this.audioRef.current.currentTime)
        });
    }

    /* -------------- HELPERS ----------------*/
    /* -------------------------------------- */
    getAudioSrc() {
        return (this.props.currentSong && this.props.currentSong.src) || '';
    }

    getAudioDuration() {
        return (this.audioRef.current && this.audioRef.current.duration) || 0;
    }

    /* -------------- EVENT HANDLERS ----------------*/
    /* --------------------------------------------- */
    handlePrev() {
        if (this.audioRef.current.currentTime < 3) {
            this.props.prevSong();
        } else {
            this._restartSong();
        }
    }

    handleScanChange(e) {
        this.setState({ playbackPosition: parseInt(e.target.value) });
    }

    handleScanHold() {
        this.setState({ scanLocked: true });
    }

    handleScanRelease() {
        this.setState({ scanLocked: false });
        this._setPlaybackPosition();
    }

    handleTimeUpdate() {
        this.debouncedUpdatePlaybackPosition();
    }

    render() {
        return (
            <Fragment>
                <audio
                    ref={this.audioRef}
                    src={this.getAudioSrc()}
                    loop={this.props.loop}
                    onEnded={this.props.nextSong}
                    onTimeUpdate={this.handleTimeUpdate}
                />

                <CurrentInfo currentSong={this.props.currentSong} />

                <Controls
                    isPlaying={this.props.isPlaying}
                    volume={this.props.volume}
                    loop={this.props.loop}
                    playbackPosition={this.state.playbackPosition}
                    duration={this.getAudioDuration()}
                    handlePlayToggle={this.props.togglePlayPause}
                    handleVolumeChange={this.props.changeVolume}
                    handleLoopToggle={this.props.toggleLoop}
                    handleNext={this.props.nextSong}
                    handlePrev={this.handlePrev}
                    handleScanChange={this.handleScanChange}
                    handleScanHold={this.handleScanHold}
                    handleScanRelease={this.handleScanRelease}
                />

                <SecondaryControls
                    volume={this.props.volume}
                    handleVolumeChange={this.props.changeVolume}
                    handleQueueToggle={this.props.toggleQueueDisplay}
                    showQueue={this.props.showQueue}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    toggleLoop: () => dispatch(toggleLoop()),
    nextSong: () => dispatch(nextSong()),
    prevSong: () => dispatch(prevSong()),
    changeVolume: e => dispatch(changeVolume(parseFloat(e.target.value))),
    toggleQueueDisplay: () => dispatch(toggleQueueDisplay()),
    handlePlayError: () => dispatch(handlePlayError())
});

const mapStateToProps = state => {
    const { player } = state;
    return {
        currentSong: player.currentSong,
        isPlaying: player.isPlaying,
        volume: player.volume,
        loop: player.loop,
        playlist: player.playlist,
        queue: player.queue,
        playlistPosition: player.playlistPosition,
        showQueue: player.showQueue
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
