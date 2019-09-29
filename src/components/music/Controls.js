import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/controls.scss';

const Controls = props => {
    const {
        isPlaying,
        loop,
        handlePlayToggle,
        handleLoopToggle,
        handleNext,
        handlePrev
    } = props;
    return (
        <div id={'main-controls'}>
            <button>Shfl off</button>

            <button onClick={handlePrev}>{'|<'}</button>

            <button onClick={handlePlayToggle}>
                {isPlaying ? '||' : '|>'}
            </button>

            <button onClick={handleNext}>{'>|'}</button>

            <button onClick={handleLoopToggle}>
                {loop ? 'Loop on' : 'Loop off'}
            </button>
        </div>
    );
};

Controls.propTypes = {
    handlePlayToggle: PropTypes.func.isRequired,
    handleLoopToggle: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired
};

export default Controls;
