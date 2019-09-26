import { PLAY_NEW_SONG, PLAY, PAUSE } from '../actions/action-types';

const initPlayerState = {
    currentSong: null,
    isPlaying: false
};

const playerReducer = (state = initPlayerState, action) => {
    switch (action.type) {
        case PLAY_NEW_SONG: {
            return {
                ...state,
                currentSong: action.payload.song,
                isPlaying: true
            };
        }

        case PLAY: {
            return {
                ...state,
                isPlaying: true
            };
        }

        case PAUSE: {
            return {
                ...state,
                isPlaying: false
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default playerReducer;
