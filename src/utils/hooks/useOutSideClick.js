import { useState, useEffect, useRef } from 'react';

// Use this hook when you create a component with Popover and have a control problem from outside events
const useOutSideClick = initialIsVisible => {
  const [isOpen, toggleOpen] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      toggleOpen(false);
    }
  };

  useEffect(() => {
    document.getElementById('root').addEventListener('click', handleClickOutside, true);
    return () => {
      document.getElementById('root').removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isOpen, toggleOpen };
};

export default useOutSideClick;

