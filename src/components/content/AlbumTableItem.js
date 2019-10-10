import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/album-table-item.scss';

const Album = props => {
    const { album } = props;
    return (
        <div className={'album'}>
            <img src={album.artSrc} alt={`Album Art: ${album.title}`} />
            <p className={'title'}>{album.title}</p>
            <p className={'artist'}>{album.artistName}</p>
            <Link to={`/albums/${album.id}`}>go here</Link>
        </div>
    );
};

Album.propTypes = {
    album: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        artistId: PropTypes.number.isRequired,
        artistName: PropTypes.string.isRequired,
        artSrc: PropTypes.string.isRequired
    })
};

export default Album;
