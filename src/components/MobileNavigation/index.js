import classnames from 'classnames';

import './index.scss';

const MobileNavItem = ({
  children,
  key,
  index,
  disabled,
}) => (
  <li
    key={key}
    data-index={index}
    className={classnames({ disabled })}
  >
    {children}
  </li>
);

const MobileNav = ({
  children,
}) => (
  <ul className="mobile-navigation">
    {children}
  </ul>
);

MobileNav.Item = MobileNavItem;

export default MobileNav;
