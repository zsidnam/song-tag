import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../common/Slider';

import '../../styles/controls.scss';

const Controls = props => {
    const {
        isPlaying,
        loop,
        volume,
        handlePlayToggle,
        handleLoopToggle,
        handleVolumeChange
    } = props;
    return (
        <div id={'control-container'}>
            <button onClick={handlePlayToggle}>
                {isPlaying ? '||' : '|>'}
            </button>
            <button onClick={handleLoopToggle}>
                {loop ? 'Loop on' : 'Loop off'}
            </button>
            <Slider
                onChange={handleVolumeChange}
                value={volume}
                min={0}
                max={1}
                step={0.05}
            />
        </div>
    );
};

Controls.propTypes = {
    handlePlayToggle: PropTypes.func.isRequired,
    handleVolumeChange: PropTypes.func.isRequired,
    handleLoopToggle: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired
};

export default Controls;
