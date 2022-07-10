import { useReducer } from 'react';

const useForceUpdate = () => {
  // eslint-disable-next-line no-unused-vars
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  return forceUpdate;
};

export default useForceUpdate;
