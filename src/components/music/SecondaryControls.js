import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../common/Slider';

const SecondaryControls = props => {
    const { volume, handleVolumeChange, handleQueueToggle, showQueue } = props;

    // TODO: Swap out text with icons
    // TODO: Use classNames functions to clean up classes

    return (
        <div id={'secondary-controls'} className={'control-container'}>
            <button
                className={showQueue ? 'active small' : 'small'}
                onClick={handleQueueToggle}
            >
                Q
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

SecondaryControls.propTypes = {
    handleVolumeChange: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired,
    showQueue: PropTypes.bool.isRequired,
    handleQueueToggle: PropTypes.func.isRequired
};

export default SecondaryControls;
