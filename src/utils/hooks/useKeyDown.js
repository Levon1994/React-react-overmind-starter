import { useCallback, useEffect } from 'react';

const useKeyDown = (callback, deps, ref, keys = []) => {

  const handleKeyDown = useCallback(e => {
    if (!keys.length || keys.includes(e.key)) {
      callback(e);
    }
  }, [keys, callback]);

  useEffect(() => {
    if (ref && ref.current) {
      const node = ref.current;
      node.addEventListener('keydown', handleKeyDown);
      return () => node.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, ref, deps]);
};

export default useKeyDown;
