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
import About from './About/About';
import HomeOffer from './Offer/HomeOffer';
import Contact from './Contact/Contact';
const App: React.FC = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/">
          <HomeJumbotron />
          <HomeOffer />
          <About />
          <Contact />
        </Route>
      </Switch>
      <FooterBar />
    </Router>
  );
}

export default App;
