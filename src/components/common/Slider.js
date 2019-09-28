import React from 'react';
import PropTypes from 'prop-types';

const Slider = props => {
    const { value, min, max, step } = props;

    return (
        <input
            onChange={props.onChange}
            type={'range'}
            value={value}
            min={min}
            max={max}
            step={step}
        />
    );
};

Slider.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default Slider;
