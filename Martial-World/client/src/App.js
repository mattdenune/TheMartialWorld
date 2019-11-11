import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AllArts from './components/AllArts';

class App extends Component {
  constructor(props){
    super()
    this.state={
      arts: [],
      currentArts: {},
      artsLoaded: false
    };
  }

  getAllArts = () => {
    axios.get("http://localhost:3000/arts").then(jsonRes => {
      this.setState({
        arts: jsonRes.data.arts,
        artsLoaded: true
      });
    });
  };

  setArt = (art) => {
    this.setState({
      currentArt: art
    });
  };


  render() {
    return (
      <Router>
        <div className="App">
          <Link exact='true' to='/'>The Martial World</Link>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <AllArts
                  getAllArts={this.getAllArts}
                  arts={this.state.arts}
                  artsLoaded={this.state.artsLoaded}
                  setArts={this.setArt}
                  />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
