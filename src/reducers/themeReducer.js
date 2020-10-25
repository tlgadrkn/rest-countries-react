export const themeReducer = (state, action) => {
  const html = document.querySelector('html');
  switch (action.type) {
    case 'GET_THEME':
      const theme =
        localStorage.getItem('theme') ||
        localStorage.setItem('theme', JSON.stringify('default'));

      html.setAttribute('class', JSON.parse(theme));
      console.log(theme);
      return JSON.parse(theme);

    case 'SET_THEME':
      console.log(action);
      localStorage.setItem('theme', JSON.stringify(action.themeValue));
      html.setAttribute('class', action.themeValue);
      return action.themeValue;
    default:
      return state;
  }
};
