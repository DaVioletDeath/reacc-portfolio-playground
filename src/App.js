import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  AboutMe,
  Portfolio,
  Contact
} from "./pages"
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
        <Footer />


      </div>
    </Router>
  );
}

export default App;
