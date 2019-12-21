import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
      </Router>
    </div>
  );
};

export default App;
