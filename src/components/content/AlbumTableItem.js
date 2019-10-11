import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/album-table-item.scss';

const Album = props => {
    const { album } = props;
    return (
        <div className={'album'}>
            <Link to={`/albums/${album.id}`}>
                <img src={album.artSrc} alt={`Album Art: ${album.title}`} />
                <p className={'title'}>{album.title}</p>
            </Link>
            <p className={'artist'}>{album.artistName}</p>
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
