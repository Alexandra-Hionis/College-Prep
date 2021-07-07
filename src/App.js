// import logo from './logo.svg';
import "./App.css";
import "./index.js";

import Navbar from "./components/Navbar";
// import Services from "./pages/services";

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
      <Wrapper></Wrapper>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
