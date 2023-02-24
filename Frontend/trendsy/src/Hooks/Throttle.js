import { useState, useEffect } from 'react';

export const useThrottle = (callback, delay) => {
  const [lastRun, setLastRun] = useState(Date.now());
  const [timerId, setTimerId] = useState(null);

  const callCallback = (args) => {
    setLastRun(Date.now());
    callback(args);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);

  return (args) => {
    const now = Date.now();
    const timeSinceLastRun = now - lastRun;

    if (timeSinceLastRun >= delay) {
      callCallback(args);
    } else {
      clearTimeout(timerId);
      const newTimerId = setTimeout(() => callCallback(args), delay - timeSinceLastRun);
      setTimerId(newTimerId);
    }
  };
};
