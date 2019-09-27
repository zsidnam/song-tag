import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SongTable from '../music/SongTable';

import '../../styles/library.scss';

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: []
        };
    }

    async componentDidMount() {
        // TODO: move to action, replace with server call
        const { data } = await axios.get('/songs/test-songs.json');
        this.setState({ songs: data.songs });
    }

    render() {
        return (
            <Fragment>
                <div id={'library-showcase'}>Some content goes here</div>
                <SongTable
                    songs={this.state.songs}
                    dispatch={this.props.dispatch}
                />
            </Fragment>
        );
    }
}

export default connect()(Library);
