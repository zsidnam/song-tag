import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Albums from './Albums';
import Album from './Album';
import Queue from '../queue/Queue';

const Content = props => {
    return (
        <div id='main-content-container'>
            <section>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/albums' component={Albums} />
                    <Route exact path='/albums/:id' component={Album} />
                </Switch>
            </section>
            {props.showQueue && <Queue />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        showQueue: state.player.showQueue
    };
};

export default connect(mapStateToProps)(Content);
