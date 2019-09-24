import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioSrc: '',
            isPlaying: false
        };

        // TODO: Use redux store for values

        this.audioRef = React.createRef();
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    handlePlayPause() {
        if (!this.audioRef.current || !this.state.audioSrc) {
            return;
        }

        if (!this.state.isPlaying) {
            this.audioRef.current.play();
            this.setState({ isPlaying: true });
        } else {
            this.audioRef.current.pause();
            this.setState({ isPlaying: false });
        }
    }

    render() {
        return (
            <Fragment>
                <audio ref={this.audioRef} src={this.state.audioSrc} />
                <button onClick={this.handlePlayPause}>Play me</button>
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
