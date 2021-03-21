import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/members" component={Members} />
          <Route path="/members/profile" component={MembersProfile} /> */}
        </Switch>
      </Router>
  </>
  );
}

export default App;
