import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/slider.module.scss';

const Slider = props => {
    const { value, min, max, step } = props;

    return (
        <input
            className={styles.slider}
            onChange={props.onChange}
            type={'range'}
            value={value}
            min={min}
            max={max}
            step={step}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
        />
    );
};

Slider.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func
};

export default Slider;
