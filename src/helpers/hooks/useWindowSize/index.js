import {useEffect, useState, useCallback} from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' && window.innerWidth,
    height: typeof window !== 'undefined' && window.innerHeight
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return {...windowSize, isMobile: windowSize.width < 768};
};
