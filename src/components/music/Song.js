import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
    const { song } = props;

    const onClick = () => {
        alert('I wish I could play this...');
    };

    return (
        <tr onClick={onClick}>
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
