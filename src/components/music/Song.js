import React from 'react';
import PropTypes from 'prop-types';

import { playNewSong } from '../../store/actions/player-actions';

const Song = props => {
    const { song } = props;

    const onClick = () => {
        console.log('selected');
    };

    const handleDoubleClick = () => {
        // TODO: Suppress the single click here
        props.dispatch(playNewSong(song));
    };

    return (
        <tr onDoubleClick={handleDoubleClick} onClick={onClick}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.time}</td>
        </tr>
    );
};

Song.propTypes = {
    song: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string,
        genre: PropTypes.string,
        time: PropTypes.string
    }),
    dispatch: PropTypes.func
};

export default Song;
