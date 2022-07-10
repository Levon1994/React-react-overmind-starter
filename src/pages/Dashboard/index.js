import { lazy } from 'react';

import { withSuspense } from 'utils';

export default withSuspense(lazy(() => import('./Dashboard')));
