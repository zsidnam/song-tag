import {
    PLAY_NEW_SONG,
    SET_CURRENT_SONG,
    CHANGE_VOLUME,
    TOGGLE_LOOP,
    TOGGLE_PLAY_PAUSE
} from '../actions/action-types';

const initPlayerState = {
    currentSong: null,
    isPlaying: false,
    volume: 0.5,
    loop: false
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

        case SET_CURRENT_SONG: {
            return {
                ...state,
                currentSong: action.payload.song
            };
        }

        case TOGGLE_PLAY_PAUSE: {
            return {
                ...state,
                isPlaying: !state.isPlaying
            };
        }

        case CHANGE_VOLUME: {
            return {
                ...state,
                volume: action.payload.volume
            };
        }

        case TOGGLE_LOOP: {
            return {
                ...state,
                loop: !state.loop
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default playerReducer;
