import { Helmet } from 'react-helmet';
import { Provider } from 'overmind-react';

import Layout from 'layout';

import { store } from 'store';
import { isDev } from 'configs';
import { LoaderProvider } from 'utils';

import './sass/index.scss';

const App = () => (
  <Provider value={store}>
    <LoaderProvider>
      {!isDev && <Helmet>
        {/* Google Analytics */}
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
      
          gtag('config', 'G-XG5GYYCNNL');
          console.info('Google Analytics - run');
        `}
        </script>
      </Helmet>}
      <Layout/>
    </LoaderProvider>
  </Provider>
);

export default App;
