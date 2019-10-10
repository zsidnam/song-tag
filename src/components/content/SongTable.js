import React from 'react';
import PropTypes from 'prop-types';

import Song from './Song';
import '../../styles/song-table.scss';

const SongTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map(song => (
                    <Song
                        song={song}
                        key={song.id}
                        isCurrentSong={props.isCurrentSong}
                        playSong={props.playSong}
                    />
                ))}
            </tbody>
        </table>
    );
};

SongTable.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object),
    isCurrentSong: PropTypes.func,
    playSong: PropTypes.func
};

export default SongTable;
