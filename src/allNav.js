import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Nav from './navbar';
import { Link } from 'react-router-dom';

class AllNav extends Component {
  render() {
    return (
      <div className="" style={{marginTop: '-30px'}}>
<Nav/>
</div>

    );
  }
}

export default AllNav;  