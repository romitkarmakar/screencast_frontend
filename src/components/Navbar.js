/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import logo from '../images/screencast.webp';
import { Link } from "gatsby"
import FacebookSignIn from './FacebookSignIn';
import { navigate } from "gatsby";
import '../custom.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logout from './Logout';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      name: "",
      isOpen: false
    }
    this.setProfile = this.setProfile.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidMount() {
    this.setProfile();
  }

  setProfile() {
    if (localStorage.email) {
      this.setState({
        profileImage: localStorage.image,
        name: localStorage.name
      })
    }
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <div className="navbar-inner">
      <Navbar color="transparent" secondary expand="md">
        <NavbarBrand>
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src={logo} width={20} height={30} className="d-inline-block align-top" alt="Logo" />
              {' '}creenCast Quiz</a>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="toggler" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink>
                <Link to="/dashboard/">
                  <a className="nav-link" href="#">Dashboard</a>
                </Link>
              </NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/leaderboard/">
                  <a className="nav-link" href="#">LeaderBoard</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Logout/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  }
}