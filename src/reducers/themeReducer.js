export const themeReducer = (state, action) => {
  const html = document.querySelector('html');
  switch (action.type) {
    case 'GET_THEME':
      const theme =
        window.localStorage.getItem('theme') ||
        window.localStorage.setItem('theme', JSON.stringify('default'));

      html.setAttribute('class', JSON.parse(theme));
      return JSON.parse(theme);

    case 'SET_THEME':
      window.localStorage.setItem('theme', JSON.stringify(action.themeValue));
      html.setAttribute('class', action.themeValue);

      return action.themeValue;
    default:
      throw new Error(
        `Wrong action type provided to themeReducer: ${action.type}`
      );
  }
};
