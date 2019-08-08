/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';

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
    if(this.state.profileImage === "") sideBar = <GoogleSignIn setProf={this.setProfile}/>
    else sideBar = <div>
      <img src={this.state.profileImage} height={30} alt="Test" className="img-circle"/>
      {this.state.name}
      </div>

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="https://i1.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1" width={30} height={30} className="d-inline-block align-top" alt="Logo" />
   ScreenCast Quiz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
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