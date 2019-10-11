import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/Player';

import './styles/common.scss';
import './styles/layout.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div id={'app-container'}>
                    <div id={'primary-container'}>
                        <Navbar />
                        <Content />
                    </div>
                    <div id={'player-container'}>
                        <Player />
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
