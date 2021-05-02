import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './page/Home';
import { Overlay } from './page/Overlay';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/overlay" exact={false} component={Overlay} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
