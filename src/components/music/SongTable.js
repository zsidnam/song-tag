import React from 'react';
import PropTypes from 'prop-types';

import Song from './Song';
import './song-table.scss';

const SongTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map(song => (
                    <Song song={song} key={song.id} dispatch={props.dispatch} />
                ))}
            </tbody>
        </table>
    );
};

SongTable.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
};

export default SongTable;
