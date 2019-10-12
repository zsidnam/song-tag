import axios from 'axios';

import {
    REQUEST_LIBRARY_CONTENT,
    RECEIVE_LIBRARY_CONTENT,
    UPDATE_LIBRARY_SONGS,
    UPDATE_ALBUMS,
    UPDATE_ALBUM
} from './action-types';

export const fetchLibrarySongs = () => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LIBRARY_CONTENT
        });

        const { data } = await axios.get('/songs/test-songs.json');

        dispatch({
            type: UPDATE_LIBRARY_SONGS,
            payload: { songs: data.songs }
        });
    } catch (err) {
        console.log('Error: Unable to fetch songs.');
        dispatch({
            type: RECEIVE_LIBRARY_CONTENT
        });
    }
};

export const fetchAlbums = () => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LIBRARY_CONTENT
        });

        const { data } = await axios.get('/test-albums.json');

        dispatch({
            type: UPDATE_ALBUMS,
            payload: { albums: data.albums }
        });
    } catch (err) {
        console.log('Error: Unable to fetch albums.');
        dispatch({
            type: RECEIVE_LIBRARY_CONTENT
        });
    }
};

export const fetchAlbum = albumId => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LIBRARY_CONTENT
        });

        const albumsReq = axios.get('/test-albums.json');
        const songsReq = axios.get('/test-songs.json');
        const [albumsRes, songsRes] = await Promise.all([albumsReq, songsReq]);

        const album = albumsRes.data.albums.find(a => a.id === albumId);
        const albumSongs = songsRes.data.songs
            .filter(s => s.albumId === albumId)
            .sort((a, b) => a - b);

        const albumDTO = { ...album, songs: albumSongs };

        dispatch({
            type: UPDATE_ALBUM,
            payload: { album: albumDTO }
        });
    } catch (err) {
        console.log(`Error: Unable to fetch album with id: ${albumId}.`);
        dispatch({
            type: RECEIVE_LIBRARY_CONTENT
        });
    }
};
