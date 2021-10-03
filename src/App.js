import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
