import {
    PLAY_NEW_SONG,
    SET_CURRENT_SONG,
    CHANGE_VOLUME,
    TOGGLE_LOOP,
    TOGGLE_PLAY_PAUSE
} from './action-types';

export const playNewSong = newSong => dispatch => {
    dispatch({
        type: PLAY_NEW_SONG,
        payload: { song: newSong }
    });
};

export const setCurrentSong = song => dispatch => {
    dispatch({
        type: SET_CURRENT_SONG,
        payload: { song }
    });
};

export const togglePlayPause = () => dispatch => {
    dispatch({
        type: TOGGLE_PLAY_PAUSE
    });
};

export const changeVolume = newVolume => dispatch => {
    dispatch({
        type: CHANGE_VOLUME,
        payload: { volume: newVolume }
    });
};

export const toggleLoop = () => dispatch => {
    dispatch({
        type: TOGGLE_LOOP
    });
};
