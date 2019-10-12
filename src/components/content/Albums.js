import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AlbumTableItem from './AlbumTableItem';
import Loading from '../common/Loading';

import { fetchAlbums } from '../../store/actions/library-actions';

import '../../styles/albums.scss';

class Albums extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAlbums());
    }

    render() {
        if (this.props.isUpdating) {
            return <Loading />;
        }

        return (
            <Fragment>
                <h1>ALBUMS</h1>
                <div id={'albums-table'}>
                    {this.props.albums.map(album => (
                        <AlbumTableItem album={album} key={album.id} />
                    ))}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { library } = state;
    return {
        albums: library.albums,
        isUpdating: library.isUpdating
    };
};

export default connect(mapStateToProps)(Albums);
