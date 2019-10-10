import axios from 'axios';

import {
    UPDATE_LIBRARY_SONGS,
    UPDATE_ALBUMS,
    UPDATE_ALBUM
} from './action-types';

export const fetchLibrarySongs = () => async dispatch => {
    try {
        const { data } = await axios.get('/songs/test-songs.json');
        dispatch({
            type: UPDATE_LIBRARY_SONGS,
            payload: { songs: data.songs }
        });
    } catch (err) {
        console.log('Error: Unable to fetch songs.');
    }
};

export const fetchAlbums = () => async dispatch => {
    try {
        const { data } = await axios.get('/test-albums.json');
        dispatch({
            type: UPDATE_ALBUMS,
            payload: { albums: data.albums }
        });
    } catch (err) {
        console.log('Error: Unable to fetch albums.');
    }
};

export const fetchAlbum = albumId => async dispatch => {
    try {
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
    }
};
