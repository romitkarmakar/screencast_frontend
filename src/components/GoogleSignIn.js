import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { navigate } from "gatsby";
import data from '../env.json';

export default class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.setData = this.setData.bind(this)
  }

  registerUser(idToken) {
    axios.get(`${data.api}quiz/register?type=1&id_token=${idToken}`).then((res) => {
      console.log("User registered successfully");
    })
  }

  componentDidMount() {
    if(localStorage.email) {
      navigate("/dashboard/")
    }
  }

  setData(res) {
    console.log(res.tokenId)
    this.registerUser(res.tokenId)
    localStorage.email = res.profileObj.email;
    localStorage.image = res.profileObj.imageUrl;
    localStorage.name = res.profileObj.name;

    navigate("/dashboard/")
  }

  render() {
    return <GoogleLogin
      clientId="423663708664-jubbbir6i2d16pd5948nvn52tu5fun32.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={(res) => { this.setData(res) }}
      onFailure={(res) => { this.setData(res)}}
      cookiePolicy={'single_host_origin'}
      className={this.props.className}
    />;
  }
}