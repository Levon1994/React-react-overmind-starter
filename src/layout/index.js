import { BrowserRouter } from 'react-router-dom';

import Authorize from 'utils/authorize';

import Body from 'sections/Body';
import Header from 'sections/Header';

const Layout = () => (
  <BrowserRouter>
    <Authorize>
      <Header />
      <Body />
    </Authorize>
  </BrowserRouter>
);

export default Layout;
