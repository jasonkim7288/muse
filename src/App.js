import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Privacy from './components/Privacy';
// import AppAds from './components/AppAds';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/privacy" component={Privacy} />
          {/* <Route path="/app-ads.txt" component={AppAds} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
