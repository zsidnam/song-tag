import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../common/Slider';
import { formatTime } from '../../utils/formatters';

import '../../styles/controls.scss';

const Controls = props => {
    const {
        isPlaying,
        loop,
        playbackPosition,
        duration,
        handlePlayToggle,
        handleLoopToggle,
        handleNext,
        handlePrev,
        handleScanChange,
        handleScanHold,
        handleScanRelease
    } = props;

    // TODO: Swap out text with icons
    // TODO: Use classNames functions to clean up classes

    return (
        <div id={'main-controls'}>
            <div>
                <button className={'small'}>S</button>

                <button onClick={handlePrev}>{'|<'}</button>

                <button onClick={handlePlayToggle}>
                    {isPlaying ? '||' : '|>'}
                </button>

                <button onClick={handleNext}>{'>|'}</button>

                <button
                    onClick={handleLoopToggle}
                    className={loop ? 'active small' : 'small'}
                >
                    R
                </button>
            </div>
            <div id={'scan-control'}>
                {formatTime(playbackPosition)}
                <Slider
                    value={playbackPosition}
                    min={0}
                    max={duration}
                    step={1}
                    onChange={handleScanChange}
                    onMouseDown={handleScanHold}
                    onMouseUp={handleScanRelease}
                />
                {formatTime(duration)}
            </div>
        </div>
    );
};

Controls.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    playbackPosition: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    handlePlayToggle: PropTypes.func.isRequired,
    handleLoopToggle: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    handleScanChange: PropTypes.func.isRequired,
    handleScanHold: PropTypes.func.isRequired,
    handleScanRelease: PropTypes.func.isRequired
};

export default Controls;
