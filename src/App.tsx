import React, { Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = React.lazy(() => import('./components/Layout'));

function App() {
  return (
    <HashRouter>
    <Suspense fallback={Loader}>
      <Switch>
        <Route path="/" render={props => <Layout {...props} />} />
      </Switch>
    </Suspense>
    </HashRouter>
  );
}

export default App;
