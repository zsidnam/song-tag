import { PLAY_NEW_SONG, PLAY, PAUSE } from './action-types';

export const playNewSong = newSong => dispatch => {
    dispatch({
        type: PLAY_NEW_SONG,
        payload: { song: newSong }
    });
};

export const play = () => dispatch => {
    dispatch({
        type: PLAY
    });
};

export const pause = () => dispatch => {
    dispatch({
        type: PAUSE
    });
};
