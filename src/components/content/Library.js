import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SongTable from '../music/SongTable';
import { setCurrentSong } from '../../store/actions/player-actions';

import '../../styles/library.scss';

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: []
        };

        this.isCurrentSong = this.isCurrentSong.bind(this);
    }

    async componentDidMount() {
        // TODO: move to action, replace with server call
        // consider moving this to app startup
        const { data } = await axios.get('/songs/test-songs.json');
        this.setState({ songs: data.songs });

        // Set initial song into player if empty
        if (!this.props.currentSong && data.songs.length) {
            this.props.dispatch(setCurrentSong(data.songs[0]));
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
                    songs={this.state.songs}
                    dispatch={this.props.dispatch}
                    isCurrentSong={this.isCurrentSong}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentSong: state.player.currentSong
    };
};

export default connect(mapStateToProps)(Library);
