import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AllArts from './components/AllArts';
import ShowArt from './components/ShowArts';

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

  handleDeleteArt = (removedArt) => {
    this.setState({
      arts: this.state.arts.filter(art => art.id !== removedArt.id)
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
            <Route
              exact
              path='/arts/:id'
              render={(props) => <ShowArt
              currentArt={this.state.currentArt}
              setArt={this.setArt}
              handleDeleteArt={this.handleDeleteArt}
              {...props}
              />}
            />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
