// import React, { Fragment, Image } from "react";
// import Body from "./components/body/body";
// import img1 from "./BackgroundImage/guillermo-ferla-Oze6U2m1oYU-unsplash.jpg";
// import { blue } from "@material-ui/core/colors";
// import "./components/body/body.css";
// function App() {
//   return (
//     <Fragment>
//       <Body className="bodytest" />
//     </Fragment>
//   );
// }

// export default App;
import React, { useEffect } from "react";
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
