const initPlayerState = {
    currentSong: null,
    isPlaying: false
};

const playerReducer = (state = initPlayerState, action) => {
    return { ...state };
};

export default playerReducer;
