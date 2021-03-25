import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teamDetails/:teamId">
            <TeamDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
