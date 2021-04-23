import React from 'react';
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//components
import TopNavBar from "./TopNavBar/TopNavBar";
import FooterBar from "./FooterBar/FooterBar";
const App: React.FC = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>

      </Switch>
      <FooterBar />
    </Router>
  );
}

export default App;
