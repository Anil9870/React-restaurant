import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
