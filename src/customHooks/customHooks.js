import React from 'react';

export function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = React.useState(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) {
      try {
        return JSON.parse(localStorageValue);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return defaultValue;
  });

  // If key and previous key same no need to re-set localstorage again unless key has changed

  const previousKeyRef = React.useRef(key);

  React.useEffect(() => {
    const previousKey = previousKeyRef.current;
    if (previousKey !== key) {
      previousKeyRef.current = key;
      window.localStorage.setItem(key, JSON.parse(state));
    }
  }, [key]);

  return [state, setState];
}
