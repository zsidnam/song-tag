import {
    UPDATE_LIBRARY_SONGS,
    UPDATE_ALBUMS,
    UPDATE_ALBUM
} from '../actions/action-types';

const initLibraryState = {
    songs: [],
    albums: [],
    album: {},
    artists: [],
    playlists: []
};

const libraryReducer = (state = initLibraryState, action) => {
    switch (action.type) {
        case UPDATE_LIBRARY_SONGS: {
            return {
                ...state,
                songs: action.payload.songs
            };
        }

        case UPDATE_ALBUMS: {
            return {
                ...state,
                albums: action.payload.albums
            };
        }

        case UPDATE_ALBUM: {
            return {
                ...state,
                album: action.payload.album
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default libraryReducer;
