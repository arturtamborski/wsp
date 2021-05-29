import { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

const routes = [
  // {
  //   exact: true,
  //   path: '/',
  //   key: 'home',
  //   render: lazy(() => import('./views/Home'))
  // },
  // {
  //   exact: true,
  //   path: '/login',
  //   key: 'login',
  //   render: lazy(() => import('./views/Login'))
  // },
  {
    exact: true,
    path: '/logout',
    key: 'logout',
    render: lazy(() => import('./views/NotFound'))
  },
  {
    exact: false,
    path: '*',
    key: 'default',
    render: () => <Redirect to="/404" />
  },
];

export default function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(r => 
          <Route {...r} render={(p) => 
            <r.render {...p} />}/>
          )
        }
      </Switch>
    </Suspense>
  );
};
