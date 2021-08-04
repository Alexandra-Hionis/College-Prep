import "./App.css";
import "./index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import IconsDiv from "./components/IconsDiv";
import Services from "./components/Services/services";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer";

function Wrapper(props) {
  return (
    <>
      <Navbar />
      {props.children}
      {/* <Footer/> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="background-color">
          <Switch>
            <Wrapper>
              <Route exact path="/" component={Home} />

              <IconsDiv />
              <Services />
              <About />
              <Contact />
              <Footer />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
