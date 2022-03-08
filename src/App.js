import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from 'react';
import Task1 from './Task1';
import Task4 from './Task4';

function App() {
  function task123() {
    return <Task1 />;
  }
    function task4() {
     return <Task4 />;
    }
    function NotFound() {
    return <h2>Not found</h2>;
  }
  return (
    <div className="App">
      <Router>
         <nav style={{display:"flex" ,flexDirection:"column"}}>
            <Link to="/">Задание1-3</Link>
            <Link to="/task4">Задание4</Link>
         </nav>

            <Switch>
                  <Route exact path="/" component={task123} />
                  <Route path="/task4" component={task4} />
                  <Route component={NotFound} />
            </Switch>
      </Router>




      
      
    </div>
  );
}

export default App;
