import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
    const { song } = props;

    const onClick = () => {
        console.log('selected');
    };

    const handleDoubleClick = () => {
        // TODO: Suppress the single click here
        console.log('played');
    };

    return (
        <tr onDoubleClick={handleDoubleClick} onClick={onClick}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.time}</td>
        </tr>
    );
};

Song.propTypes = {
    song: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        genre: PropTypes.string,
        time: PropTypes.string
    })
};

export default Song;
