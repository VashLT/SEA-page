import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './scss/App.scss';
import LandPage from "./pages/LandPage";
import HorarioPage from "./pages/HorarioPage";
import AreasPage from "./pages/AreasPage";
import FAQPage from "./pages/FAQPage";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
import ThemeContext from './components/Theme/ThemeContext';

import { fetchTheme } from './utils/fetch';

export const App: React.FC = () => {
  const [theme, setTheme] = useState(fetchTheme());

  const classTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
