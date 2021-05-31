import React from "react";
import "./App.css";
import SimilarApp from "./SimilarApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImagesRecommended from "./ImagesRecommended.js";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/ImagesRecommended">
              <ImagesRecommended />
            </Route>
            <Route path="/">
              <SimilarApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
