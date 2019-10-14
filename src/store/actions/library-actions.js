import axios from 'axios';

import {
    REQUEST_LIBRARY_CONTENT,
    RECEIVE_LIBRARY_CONTENT,
    UPDATE_ALBUMS,
    UPDATE_SELECTED_ALBUM,
    UPDATE_PLAYLISTS,
    UPDATE_SELECTED_PLAYLIST
} from './action-types';

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

export const fetchPlaylists = () => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LIBRARY_CONTENT
        });

        const { data } = await axios.get('/test-playlists.json');

        dispatch({
            type: UPDATE_PLAYLISTS,
            payload: { playlists: data.playlists }
        });
    } catch (err) {
        console.log('Error: Unable to fetch playlists.');
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
            .map(s => ({ ...s, playContext: 'album' }))
            .sort((a, b) => a.trackNumber - b.trackNumber);

        const albumDTO = { ...album, songs: albumSongs };

        dispatch({
            type: UPDATE_SELECTED_ALBUM,
            payload: { album: albumDTO }
        });
    } catch (err) {
        console.log(`Error: Unable to fetch album with id: ${albumId}.`);
        dispatch({
            type: RECEIVE_LIBRARY_CONTENT
        });
    }
};

export const fetchPlaylist = playlistId => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LIBRARY_CONTENT
        });

        const playlistsReq = axios.get('/test-playlists.json');
        const playlistSongsReq = axios.get('/test-playlist-songs.json');
        const songsReq = axios.get('/test-songs.json');
        const [playlistsRes, playlistSongsRes, songsRes] = await Promise.all([
            playlistsReq,
            playlistSongsReq,
            songsReq
        ]);

        const playlist = playlistsRes.data.playlists.find(
            p => p.id === playlistId
        );

        const playlistSongIds = playlistSongsRes.data.playlistSongs.filter(
            ps => ps.playlistId === playlistId
        );

        const playlistSongs = playlistSongIds
            .map(ps => {
                const song = songsRes.data.songs.find(s => s.id === ps.songId);
                return {
                    ...song,
                    id: ps.id,
                    trackNumber: ps.playlistTrackNumber,
                    playContext: 'playlist'
                };
            })
            .sort((a, b) => a.trackNumber - b.trackNumber);

        const playlistDTO = { ...playlist, songs: playlistSongs };

        dispatch({
            type: UPDATE_SELECTED_PLAYLIST,
            payload: { playlist: playlistDTO }
        });
    } catch (err) {
        console.log(`Error: Unable to fetch playlist with id: ${playlistId}.`);
    }
};
