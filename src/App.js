import "./App.css";
import "./index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";

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
        <div>
          <Switch>
            <Wrapper>
              <Route exact path="/services" component={Services} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
