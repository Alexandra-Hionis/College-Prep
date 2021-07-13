import "./App.css";
import "./index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";

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
            </Wrapper>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
