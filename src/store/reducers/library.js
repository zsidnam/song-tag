import { UPDATE_LIBRARY_SONGS } from '../actions/action-types';

const initLibraryState = {
    songs: []
};

const libraryReducer = (state = initLibraryState, action) => {
    switch (action.type) {
        case UPDATE_LIBRARY_SONGS: {
            return {
                ...state,
                songs: action.payload.songs
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default libraryReducer;
