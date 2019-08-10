/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import logo from '../images/screencast.png';
import { Link } from "gatsby"
import FacebookSignIn from './FacebookSignIn';
import { navigate } from "gatsby";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


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

  setProfile(obj) {
    this.setState({
      profileImage: obj.imageUrl,
      name: obj.name
    })
    // navigate("/dashboard/")
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    var sideBar;
    if (this.state.profileImage === "") sideBar = <div><GoogleSignIn setProf={this.setProfile} /><FacebookSignIn /></div>
    else sideBar = <div>
      <img src={this.state.profileImage} height={30} alt="Test" className="img-circle" />
      {this.state.name}
    </div>

    return <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src={logo} width={20} height={30} className="d-inline-block align-top" alt="Logo" />
              {' '}creenCast Quiz</a>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
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
              <NavLink>
                <Link to="/dashboard/">
                  <a className="nav-link" href="#">Dashboard</a>
                </Link>
              </NavLink>
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
                {sideBar}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>;
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a className="navbar-brand" href="#">
          <img src={logo} width={20} height={30} className="d-inline-block align-top" alt="Logo" />
          {' '}creenCast Quiz</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/">
              <a className="nav-link" href="#">Dashboard</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard/">
              <a className="nav-link" href="#">LeaderBoard</a>
            </Link>
          </li>
        </ul>
        <span className="navbar-text">
          {sideBar}
        </span>
      </div>
    </nav>
      ;
  }
}