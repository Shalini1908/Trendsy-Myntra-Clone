import { useState, useEffect } from 'react';

export const useThrottle=(callback, delay)=> {
  const [lastRun, setLastRun] = useState(Date.now());
  
  useEffect(() => {
    const handler = setTimeout(function() {
      const now = Date.now();
      const timeSinceLastRun = now - lastRun;
      if (timeSinceLastRun >= delay) {
        callback();
        setLastRun(now);
      }
    }, delay - (Date.now() - lastRun));
    return () => clearTimeout(handler);
  }, [callback, delay, lastRun]);

  return callback;
}

