import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CurrentInfo = props => {
    const { currentSong } = props;

    if (!currentSong) {
        return <div id={'current-info'}></div>;
    }

    const { title, artistName, albumId, albumArtSrc } = currentSong;

    return (
        <div id={'current-info'}>
            <Link to={`/albums/${albumId}`}>
                <img src={albumArtSrc} alt={`Album Art: ${title}`} />
            </Link>
            <div id={'track-info'}>
                <p className={'title'}>{title}</p>
                <p className={'artist'}>{artistName}</p>
            </div>
        </div>
    );
};

CurrentInfo.propTypes = {
    currentSong: PropTypes.object
};

export default CurrentInfo;
