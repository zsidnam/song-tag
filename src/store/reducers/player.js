import {
    REQUEST_NEW_SONG,
    SET_CURRENT_SONG,
    CHANGE_VOLUME,
    TOGGLE_LOOP,
    TOGGLE_PLAY_PAUSE,
    UPDATE_PLAYLIST,
    UPDATE_PLAYLIST_POSITION,
    HANDLE_PLAY_ERROR,
    TOGGLE_QUEUE_DISPLAY
} from '../actions/action-types';

const initPlayerState = {
    currentSong: null,
    isPlaying: false,
    volume: 0.5,
    loop: false,
    playlist: [],
    queue: [],
    playlistPosition: 0,
    showQueue: false
};

const playerReducer = (state = initPlayerState, action) => {
    switch (action.type) {
        case REQUEST_NEW_SONG: {
            return {
                ...state,
                currentSong: action.payload.song,
                playlistPosition: action.payload.playlistPosition,
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

        case UPDATE_PLAYLIST: {
            return {
                ...state,
                playlist: action.payload.songs,
                playlistPosition: 0
            };
        }

        case UPDATE_PLAYLIST_POSITION: {
            return {
                ...state,
                playlistPosition: action.payload.playlistPosition
            };
        }

        case HANDLE_PLAY_ERROR: {
            return {
                ...state,
                isPlaying: false
            };
        }

        case TOGGLE_QUEUE_DISPLAY: {
            return {
                ...state,
                showQueue: !state.showQueue
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default playerReducer;
