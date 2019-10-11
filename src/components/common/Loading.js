import React from 'react';
import ReactLoading from 'react-loading';
import styles from '../../styles/constants.scss';

const Loading = props => (
    <div className={'center-container'}>
        <ReactLoading type={'spin'} color={styles.blue} delay={150} />
    </div>
);

export default Loading;
