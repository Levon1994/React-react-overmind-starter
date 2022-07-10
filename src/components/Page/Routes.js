import { Switch, Route, Redirect } from 'react-router-dom';

import { uuid } from 'utils';

const Routes = ({ sections, basePath }) => {
  const allSections = sections
    .flatMap(({ subsections, ...item }) => subsections || item)
    .flatMap(({ subroutes, ...item }) => subroutes ? [item, ...subroutes] : item);

  return (
    <Switch>
      {allSections.map(({ pathName, path, component, exact, strict }) => {
        return (
          <Route
            key={uuid()}
            component={component}
            exact={exact}
            path={basePath + (pathName || path)}
            strict={strict}
          />
        );
      })}
      <Route render={({ history: { location: { pathname, search, hash } } }) => {
          const selectedPath = allSections.find(({ path }) => pathname.includes(path))?.path;
          return pathname.slice(-1) === '/'
            ? <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
            : <Redirect to={basePath + (selectedPath || allSections[0].path)} />
        }}
      />
    </Switch>
  );
};

export default Routes;
