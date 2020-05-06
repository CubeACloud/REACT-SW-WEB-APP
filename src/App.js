import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Nav from "./navbar";
import Main from './components/main';
import { Link } from 'react-router-dom';
import Fater from './components/footer';
import AllNav from './allNav';

class App extends Component {
  render() {
    return (

            <Main/>
      
    );
  }
}

export default App;
