import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Author from './pages/author'
import Publisher from './pages/publisher'
import Home from './pages/home'
class App extends Component {
  render() {
    console.log("app render");
    return (
      <Router><div className="Body">
        <header>
          <Link to={'/'}><h1>Book Management App</h1></Link>
        </header>
        <div className="container">
          <div className="leftnav">
            <button> <Link to={'/Publisher'} className="nav-link">Publisher</Link></button>
            <button><Link to={'/Author'}>Author</Link>
            </button>
          </div>
          <div className="rightnav">
            <button>Reset</button>
          </div>
        </div>
      </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Author' component={Author} />
          <Route path='/Publisher' component={Publisher} />
        </Switch>
      </Router>
    );
  }
}

export default App;
