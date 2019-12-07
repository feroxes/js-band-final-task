import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './containers/SignIn';

function App() {
  return (
    <div className="position-relative">
      <Switch>
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
