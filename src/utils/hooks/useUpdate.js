import { useRef, useEffect } from 'react';

const useUpdate = (callback, dependencies) => {
  const mounted = useRef(false);
  // eslint-disable-next-line
  useEffect(
    mounted.current
      ? callback
      : () => { mounted.current = true; }
    , dependencies);
};

export default useUpdate;
