import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import pages from 'configs/menu';

const MainRoutes = () => {
  const redirectPath = !!pages?.length && pages[0].path;

  return (
    <Switch>
      {pages.map(({ key, path, component }) => (
        <Route
          key={key}
          path={path}
          component={component}
        />
      ))}
      {redirectPath && <Redirect from="/" to={redirectPath} />}
    </Switch>
  );
};

export default MainRoutes;
