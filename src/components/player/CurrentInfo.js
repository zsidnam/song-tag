import React from 'react';
import PropTypes from 'prop-types';

const CurrentInfo = props => {
    const { currentSong } = props;

    const title = (currentSong && currentSong.title) || '';
    const artist = (currentSong && currentSong.artist) || '';

    return (
        <div id={'current-info'}>
            <p className={'title'}>{title}</p>
            <p className={'artist'}>{artist}</p>
        </div>
    );
};

CurrentInfo.propTypes = {
    currentSong: PropTypes.object
};

export default CurrentInfo;
