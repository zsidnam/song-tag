import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Content from './components/layout/Content';
import Navbar from './components/layout/Navbar';
import Player from './components/music/Player';

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
