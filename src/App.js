import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Comps/Home';
import WodForm from './Comps/WodForm';
import Wod from './Comps/Wod'
import Navbar from './Comps/Navbar';

function App() {
  const [wods, setWods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/wods")
      .then(resp => resp.json())
      .then(data => setWods(data))
  }, []);

  function submitWod(newWod) {
    fetch("http://localhost:3000/wods", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", "Accepts": "application/json"},
        body: JSON.stringify(newWod)
    })
        .then(resp => resp.json())
        .then(data => setWods([...wods, data]));
  };


  return (
    <div className="App">
        <h1 className="header">Pick Your WOD</h1>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home wods={wods} />
          </Route>
          <Route exact path="/wod/new">
            <WodForm submitWod={submitWod} />
          </Route>
          <Route exact path="/wod/:id">
            <Wod wods={wods}/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
};

export default App;
