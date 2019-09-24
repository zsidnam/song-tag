import React, { Fragment } from 'react';
import axios from 'axios';

import SongTable from '../music/SongTable';
import Player from '../music/Player';

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: []
        };
    }

    async componentDidMount() {
        // TODO: move to action, replace with server call
        const { data } = await axios.get('/test-songs.json');
        this.setState({ songs: data.songs });
    }

    render() {
        return (
            <Fragment>
                <SongTable songs={this.state.songs} />
                <Player />
            </Fragment>
        );
    }
}

export default Library;
