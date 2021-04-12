import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './app.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/Welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
