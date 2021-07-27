import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './scss/App.scss';
import LandPage from "./components/page/LandPage";
import HorarioPage from "./components/page/HorarioPage";
import AreasPage from "./components/page/AreasPage";
import FAQPage from "./components/page/FAQPage";
import ThemeSwitcher from "./components/element/Theme/ThemeSwitcher";
import ThemeContext from './components/element/Theme/ThemeContext';

import { fetchTheme } from './utils/fetch';

function App() {
  const [theme, setTheme] = useState(fetchTheme());

  const classTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="app" className={classTheme}>
        <ThemeSwitcher />
        <Router>
          <Switch>
            <Route exact path='/'>
              <LandPage />
            </Route>
            <Route exact path='/areas'>
              <AreasPage />
            </Route>
            <Route exact path='/horarios'>
              <HorarioPage />
            </Route>
            <Route exact path='/faq'>
              <FAQPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
