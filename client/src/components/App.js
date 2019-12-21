import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
