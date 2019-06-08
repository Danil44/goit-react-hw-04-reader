import React, { lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

const ReaderPage = lazy(() => import('./pages/ReaderPage'));

const App = () => {
  return (
    <div>
      <HashRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/reader" component={ReaderPage} />
            <Redirect to="/reader" />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
