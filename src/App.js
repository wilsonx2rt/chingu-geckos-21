import React, {Component} from 'react';
import Quote from './Quote';
import './App.css';
import Clock from './Clock';
import Weather from './Weather';
import Greeting from './Greeting';
import Search from './Search';
import ToDo from './ToDo';
import Links from './Links';

class App extends Component {

  render() {
    return (
    <div className="App">
      <div className="top-container">
        <Search />
        <Weather />
      </div>
      <div className="middle-container">
        <Clock/>
        <Greeting />
      </div>
      <div className="bottom-container">
        <Links />
        <a href="https://github.com/wilsonx2rt/chingu-geckos-21" target="_blank">Click To See The Code</a>
        <ToDo />
      </div>
    </div>);
  }
}

export default App;
