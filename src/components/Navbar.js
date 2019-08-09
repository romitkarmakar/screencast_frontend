/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import logo from '../images/screencast.png';
import { Link } from "gatsby"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      name: ""
    }
    this.setProfile = this.setProfile.bind(this)
  }

  setProfile(obj) {
    this.setState({
      profileImage: obj.imageUrl,
      name: obj.name
    })
  }

  render() {
    var sideBar;
    if (this.state.profileImage === "") sideBar = <GoogleSignIn setProf={this.setProfile} />
    else sideBar = <div>
      <img src={this.state.profileImage} height={30} alt="Test" className="img-circle" />
      {this.state.name}
    </div>

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} width={20} height={30} className="d-inline-block align-top" alt="Logo" />
        {' '}creenCast Quiz</a>
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