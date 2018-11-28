import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import data from './data';

import Nav from './Nav';
import Home from './Home';
import SubNav from './SubNav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: data
    
    }
  }
  render() {
    const { links } = this.state;
 
    return (
      <div className="App">
        <Nav links={links}/>
        <Route exact path='/' component={Home}/>
        <Route  exact path='/:name' render = {props => <SubNav {...props} links={ links }/>}/>
        
      </div>
    );
  }
}

export default App;
