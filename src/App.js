import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './scss/styles.scss';
import LandPage from "./components/page/LandPage";
import HorarioPage from "./components/page/HorarioPage";
import AreasPage from "./components/page/AreasPage";
import FAQPage from "./components/page/FAQPage";
import TestPage from "./components/page/TestPage";
import ThemeSwitcher from "./components/element/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState(fetchTheme());
  var props = {};

  function getTheme() {
    if (theme === "light") return "dark";
    else return "light";
  }

  function toggleTheme() {
    setTheme(getTheme());
  }

  function changeTheme() {
    toggleTheme();
    document.getElementById("app").classList.toggle("dark-mode");
    const navbarParent = document.getElementById("navbar-parent");
    if (navbarParent) {
      console.log(navbarParent.classList)
      if (navbarParent.classList.contains("active")) props.active = true;
      navbarParent.classList.toggle("dark-mode");
      console.log(props);
    }
    localStorage.setItem('theme', getTheme());
  }

  const classTheme = theme === "dark" ? "dark-mode" : "";
  props.theme = theme;


  console.log(`current theme: ${theme}`)
  console.log("props at App", props);

  return (
    <div id="app" className={classTheme}>
      <ThemeSwitcher theme={theme} themeFunction={ changeTheme } />
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandPage {...props}/>
          </Route>
          <Route exact path='/areas'>
            <AreasPage {...props}/>
          </Route>
          <Route exact path='/horarios'>
            <HorarioPage {...props} />
          </Route>
          <Route exact path='/faq'>
            <FAQPage {...props} />
          </Route>
          <Route exact path='/test'>
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function fetchTheme() {
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
  
export default App;
