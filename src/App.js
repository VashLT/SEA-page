import React from "react";
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

function App() {
  return (
    <div id="app">
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
          <Route exact path='/test'>
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
  
export default App;
