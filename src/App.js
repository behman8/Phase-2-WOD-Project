import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Comps/Home';
import Wod from './Comps/Wod';
import WodForm from './Comps/WodForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wod/new">
            <WodForm />
          </Route>
          <Route exact path="/wod/:id">
            <Wod />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
