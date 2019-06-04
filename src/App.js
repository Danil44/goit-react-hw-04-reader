import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const ReaderPage = lazy(() => import('./pages/ReaderPage'));

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reader" component={ReaderPage} />
          <Redirect to="/reader" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
