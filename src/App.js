import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

import './layout.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <header>Header</header>
                <Navbar />
                <div id='main-content'>
                    <Content />
                    <Sidebar />
                </div>
                <footer>Footer</footer>
            </Router>
        </Provider>
    );
}

export default App;
