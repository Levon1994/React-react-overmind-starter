import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Navigation = ({ sections, basePath }) => {

  const navLinks = useMemo(
    () => sections.filter(item => item.name),
    [sections],
  );

  return (
    !!navLinks.length && (
      <ul className="bo-nav">
        <li />
        <li>
          {navLinks.map(({ path, name, redirectPath }, index) => {
            const navPath = redirectPath || (basePath + path);
            return (
              <NavLink
                key={index}
                to={navPath}
                className="nav-item"
              >
                <span>{name}</span>
              </NavLink>
            );
          })}
        </li>
        <li />
      </ul>
    )
  );
};

export default Navigation;
