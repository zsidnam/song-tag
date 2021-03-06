import React from 'react';
import PropTypes from 'prop-types';

const Song = props => {
    const { song } = props;
    const isCurrent = props.isCurrentSong(song.id);

    // TODO: Implement 'selected' status
    const onClick = () => {
        console.log('selected');
    };

    const handleDoubleClick = () => {
        props.playSong(song);
    };

    const handleDragover = e => {
        e.preventDefault();
    };

    return (
        <tr
            onDoubleClick={handleDoubleClick}
            onClick={onClick}
            className={isCurrent ? 'current' : ''}
            draggable={true}
            onDragOver={handleDragover}
            onContextMenu={e => {
                e.preventDefault();
                console.log('implement me!');
            }}
        >
            <td>{song.title}</td>
            <td>{song.artistName}</td>
            <td>{song.albumTitle}</td>
            <td>{song.time}</td>
        </tr>
    );
};

Song.propTypes = {
    song: PropTypes.shape({
        title: PropTypes.string,
        artistName: PropTypes.string,
        albumTitle: PropTypes.string,
        time: PropTypes.string
    }),
    isCurrentSong: PropTypes.func,
    playSong: PropTypes.func
};

export default Song;
