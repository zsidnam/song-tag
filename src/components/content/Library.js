import React, { Fragment } from 'react';

import SongTable from '../music/SongTable';
import testSongs from '../../data/test-music';

const Library = props => {
    return (
        <Fragment>
            <SongTable songs={testSongs} />
        </Fragment>
    );
};

export default Library;
