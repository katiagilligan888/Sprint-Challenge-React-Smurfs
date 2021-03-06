import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom'; 
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount(){
    axios.get("http://localhost:3333/smurfs").then(response => {
      this.setState({
        smurfs: response.data
      })
    }).catch(error => {
      console.log(error); 
    })
  }


  
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {Header} />
        <Route path = "/smurfs" render = {props => 
        (<div>
          <SmurfForm {...props} />
          <Smurfs {...props} smurfs={this.state.smurfs} />
          </div>
          )
        }
        />
      </div>
    );
  }
}

export default App;
