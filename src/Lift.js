import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import Tracking from './services/Tracking';
import OneRepMaximum from './OneRepMaximum';
import BodyMassIndex from './BodyMassIndex';
import TotalVolume from './TotalVolume';
import './Lift.css';

class Lift extends Component {

  constructor() {
    super();
    Tracking.initialize();
  }

  componentWillMount() {
    console.log('Lift.js.componentWillMount')
    Tracking.track()
  }

  render() {
    return (
      <Router>
        <div className="lift-app">
          <header className="lift-header">
            <h1><NavLink exact to="/">lift</NavLink></h1>
            <nav>
              <ul>
                <li><NavLink to="/one-rep-max">One Rep Maximum</NavLink></li>
                <li><NavLink to="/total-volume">Total Volume</NavLink></li>
                <li><NavLink to="/body-mass-index">Body Mass Index</NavLink></li>
              </ul>
            </nav>
          </header>
            <Switch>
              <Route exact path="/one-rep-max" component={OneRepMaximum} />
              <Route exact path="/body-mass-index" component={BodyMassIndex} />
              <Route exact path="/total-volume" component={TotalVolume} />
              <Route exact path="/">
                <div className="lift-hero">
                  <h2>come with me<br />if you want to lift.</h2>
                </div>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }

}

export default Lift;
