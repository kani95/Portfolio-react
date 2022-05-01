import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';
import Portrait from './components/Portrait';
import Projects from './components/Projects';
class App extends React.Component {
  render() {
    return (
    <div className="App">
      <AppNav />
      <Portrait />
      <Projects />
    </div>
    );
  }
}

export default App;
