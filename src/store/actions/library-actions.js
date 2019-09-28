import axios from 'axios';

import { UPDATE_LIBRARY_SONGS } from './action-types';

export const fetchLibrarySongs = () => async dispatch => {
    try {
        const { data } = await axios.get('/songs/test-songs.json');
        dispatch({
            type: UPDATE_LIBRARY_SONGS,
            payload: { songs: data.songs }
        });
    } catch (err) {
        console.log('Error: Unable to fetch songs.');
    }
};
