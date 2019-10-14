import {
    REQUEST_LIBRARY_CONTENT,
    RECEIVE_LIBRARY_CONTENT,
    UPDATE_ALBUMS,
    UPDATE_SELECTED_ALBUM,
    UPDATE_PLAYLISTS,
    UPDATE_SELECTED_PLAYLIST
} from '../actions/action-types';

const initLibraryState = {
    songs: [],
    albums: [],
    album: {},
    artists: [],
    playlists: [],
    playlist: {},
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

        case UPDATE_ALBUMS: {
            return {
                ...state,
                albums: action.payload.albums,
                isUpdating: false
            };
        }

        case UPDATE_SELECTED_ALBUM: {
            return {
                ...state,
                album: action.payload.album,
                isUpdating: false
            };
        }

        case UPDATE_PLAYLISTS: {
            return {
                ...state,
                playlists: action.payload.playlists,
                isUpdating: false
            };
        }

        case UPDATE_SELECTED_PLAYLIST: {
            return {
                ...state,
                playlist: action.payload.playlist,
                isUpdating: false
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default libraryReducer;
