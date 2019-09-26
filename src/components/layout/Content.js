import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../content/Landing';
import Library from '../content/Library';

const Content = props => {
    return (
        <section>
            <Route exact path='/' component={Landing} />
            <Switch>
                <Route exact path='/library' component={Library} />
            </Switch>
        </section>
    );
};

export default Content;
