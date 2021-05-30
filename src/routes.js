import { Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: '/',
    key: 'home',
    render: lazy(() => import('./views/Home'))
  },
  {
    exact: true,
    path: '/dictionary',
    key: 'dictionary',
    render: lazy(() => import('./views/Dictionary'))
  },
  {
    exact: true,
    path: '/my-forms',
    key: 'myforms',
    render: lazy(() => import('./views/MyForms'))
  },
  {
    exact: true,
    path: '/login',
    key: 'login',
    render: lazy(() => import('./views/Login'))
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
