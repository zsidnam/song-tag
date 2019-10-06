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
} from './action-types';

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

export const updatePlaylist = newSongs => dispatch => {
    dispatch({
        type: UPDATE_PLAYLIST,
        payload: { songs: newSongs }
    });
};

export const updatePlaylistPosition = newPosition => dispatch => {
    dispatch({
        type: UPDATE_PLAYLIST_POSITION,
        payload: { playlistPosition: newPosition }
    });
};

export const toggleQueueDisplay = () => dispatch => {
    dispatch({
        type: TOGGLE_QUEUE_DISPLAY
    });
};

export const requestNewSong = newSong => (dispatch, getState) => {
    const { player } = getState();
    const { playlist } = player;

    const newSongPosition = playlist.findIndex(x => x.id === newSong.id);
    if (newSongPosition < 0) {
        throw new Error('Requested song not set in playlist');
    }

    dispatch({
        type: REQUEST_NEW_SONG,
        payload: { song: newSong, playlistPosition: newSongPosition }
    });
};

// TODO: This assumes playlist repeat is always on. Change to allow
// for playlist to end.
export const nextSong = () => (dispatch, getState) => {
    const { player } = getState();
    const { playlistPosition, playlist } = player;

    const nextPos =
        playlistPosition === playlist.length - 1 ? 0 : playlistPosition + 1;

    const nextSong = playlist[nextPos];

    dispatch(updatePlaylistPosition(nextPos));
    dispatch(requestNewSong(nextSong));
};

// TODO: This assumes playlist repeat is always on. Change to allow
// for playlist to end.
export const prevSong = () => (dispatch, getState) => {
    const { player } = getState();
    const { playlistPosition, playlist } = player;

    const prevPos =
        playlistPosition === 0 ? playlist.length - 1 : playlistPosition - 1;

    const prevSong = playlist[prevPos];

    dispatch(updatePlaylistPosition(prevPos));
    dispatch(requestNewSong(prevSong));
};

export const handlePlayError = () => dispatch => {
    // TODO: Add toast notification here to display error
    console.log('Unable to play track. Please try again later');
    dispatch({
        type: HANDLE_PLAY_ERROR
    });
};
