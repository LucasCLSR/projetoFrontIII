import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translator from './Translator';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Translator} />
      </Switch>
    </Router>
  );
}

export default App;
