import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../common/Slider';

const SecondaryControls = props => {
    const { volume, handleVolumeChange } = props;

    return (
        <div id={'secondary-controls'}>
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
    volume: PropTypes.number.isRequired
};

export default SecondaryControls;
