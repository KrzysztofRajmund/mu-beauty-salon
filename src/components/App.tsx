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
import HomeJumbotron from './HomeJumbotron/HomeJumbotron';
const App: React.FC = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/">
          <HomeJumbotron />
        </Route>
      </Switch>
      <FooterBar />
    </Router>
  );
}

export default App;