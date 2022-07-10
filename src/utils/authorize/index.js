import PropTypes from 'prop-types';

import { useStore } from 'store';

import LoginComponent from 'dev/LoginComponent';

const Authorize = ({
  fallback,
  children,
}) => {
  const {
    state: { isLoggedIn },
  } = useStore();

  return isLoggedIn ? children : fallback;
};

Authorize.defaultProps = {
  fallback: <LoginComponent />,
};

Authorize.propTypes = {
  fallback: PropTypes.node,
  children: PropTypes.node,
};

export default Authorize;
