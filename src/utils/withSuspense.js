import { Suspense } from 'react';

const withSuspense = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default withSuspense;
