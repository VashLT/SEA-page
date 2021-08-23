export const fetchTheme = () => {
  if ("theme" in localStorage) {
    const theme = localStorage.getItem("theme") || "";
    return theme;
  }

  const userPrefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (userPrefersDarkTheme.matches) {
    localStorage.setItem('theme', "dark");
    return "dark";
  }

  localStorage.setItem('theme', "light");
  return "light";
}