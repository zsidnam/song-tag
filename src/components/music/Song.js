import React from 'react';
import PropTypes from 'prop-types';

import { requestNewSong } from '../../store/actions/player-actions';

const Song = props => {
    const { song } = props;
    const isCurrent = props.isCurrentSong(song.id);

    // TODO: Implement 'selected' status
    const onClick = () => {
        console.log('selected');
    };

    const handleDoubleClick = () => {
        props.dispatch(requestNewSong(song));
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
    dispatch: PropTypes.func,
    isCurrentSong: PropTypes.func
};

export default Song;
