import * as React from 'react';

const useTheme = () => {
  const [state, setState] = React.useState(() => {
    const value = window.localStorage.getItem('theme');
    if (value) {
      return JSON.parse(value);
    }
    return 'default';
  });

  React.useLayoutEffect(() => {
    const $html = window.document.querySelector('html');
    $html.setAttribute('class', state);
    window.localStorage.setItem('theme', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useTheme;
