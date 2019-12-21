import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
