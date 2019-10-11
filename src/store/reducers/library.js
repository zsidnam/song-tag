import {
    REQUEST_LIBRARY_CONTENT,
    RECEIVE_LIBRARY_CONTENT,
    UPDATE_LIBRARY_SONGS,
    UPDATE_ALBUMS,
    UPDATE_ALBUM
} from '../actions/action-types';

const initLibraryState = {
    songs: [],
    albums: [],
    album: {},
    artists: [],
    playlists: [],
    isUpdating: false
};

const libraryReducer = (state = initLibraryState, action) => {
    switch (action.type) {
        case REQUEST_LIBRARY_CONTENT: {
            return {
                ...state,
                isUpdating: true
            };
        }

        case RECEIVE_LIBRARY_CONTENT: {
            return {
                ...state,
                isUpdating: false
            };
        }

        case UPDATE_LIBRARY_SONGS: {
            return {
                ...state,
                songs: action.payload.songs,
                isUpdating: false
            };
        }

        case UPDATE_ALBUMS: {
            return {
                ...state,
                albums: action.payload.albums,
                isUpdating: false
            };
        }

        case UPDATE_ALBUM: {
            return {
                ...state,
                album: action.payload.album,
                isUpdating: false
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default libraryReducer;
