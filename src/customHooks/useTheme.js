import * as React from 'react';

const useTheme = () => {
  const [state, setState] = React.useState(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const value = window.localStorage.getItem('theme');
    if (userPrefersDark && !value) {
      return 'dark';
    }
    return value ? JSON.parse(value) : 'default';
  });

  React.useLayoutEffect(() => {
    const $html = window.document.querySelector('html');
    $html.setAttribute('class', state);
    window.localStorage.setItem('theme', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useTheme;
