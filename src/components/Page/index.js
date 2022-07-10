import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import Navigation from './Navigation';
import Routes from './Routes';

import './index.scss';

const Page = ({ sections }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <Navigation sections={sections} basePath={path} />
      <Routes sections={sections} basePath={path} />
    </>
  );
};

Page.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
      component: PropTypes.elementType,
    }),
  ).isRequired,
};

export default Page;
