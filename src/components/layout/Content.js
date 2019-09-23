import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../content/Landing';
import Library from '../content/Library';

const Content = (props) => {
    return (
        <section>
            <Router>
                <Route exact path="/" component={Landing} />
                <Switch>
                    <Route exact path="/library" component={Library} />
                </Switch>
            </Router>
        </section>
    );
};

export default Content;