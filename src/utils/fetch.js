export function fetchTheme() {
  var theme;
  if (localStorage.hasOwnProperty("theme")) {
    theme = localStorage.getItem("theme");
  } else {
    const userPrefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (userPrefersDarkTheme.matches) {
      localStorage.setItem('theme', "dark");
      theme = "dark";
    } else {
      localStorage.setItem('theme', "light");
      theme = "light";
    }
  }
  return theme;
}