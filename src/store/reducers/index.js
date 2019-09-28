import { combineReducers } from 'redux';

import user from './user';
import player from './player';
import library from './library';

export default combineReducers({
    user,
    player,
    library
});
