import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreation from './streams/StreamCreation';
import StreamEdition from './streams/StreamEdition';
import StreamDeletion from './streams/StreamDeletion';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/create" component={StreamCreation} />
            <Route path="/streams/edit/:id" component={StreamEdition} />
            <Route path="/streams/delete/:id" component={StreamDeletion} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
