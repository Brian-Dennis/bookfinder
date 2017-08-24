import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

// Initializing the Navbar
class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            BookFinder
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
