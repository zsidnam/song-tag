import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Landing from '../content/Landing';
import Library from '../content/Library';
import Queue from '../layout/Queue';

const Content = props => {
    return (
        <div id='main-content-container'>
            <section>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/library' component={Library} />
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
