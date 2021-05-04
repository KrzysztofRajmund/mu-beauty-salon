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
import AboutShort from './About/AboutShort';
import About from './About/About';
import HomeOffer from './Offer/HomeOffer';
import Offer from './Offer/Offer';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
const App: React.FC = () => {
  return (
    <Router>
      <TopNavBar />
      <Switch>
        <Route path="/zabiegi" >
          <Offer />
        </Route>
        <Route path="/galeria" >
          <Gallery />
        </Route>
        <Route path="/onas" >
          <About />
        </Route>
        <Route path="/kontakt" >
          <Contact />
        </Route>
        <Route path="/">
          <HomeJumbotron />
          <HomeOffer />
          <AboutShort />
          <Contact />
        </Route>
      </Switch>
      <FooterBar />
    </Router>
  );
}

export default App;
