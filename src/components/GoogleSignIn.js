import React from 'react';
import GoogleLogin from 'react-google-login';

export default class GoogleSignIn extends React.Component {
  render() {
    return <GoogleLogin
      clientId="89459250735-j8fpvf9elrl0e9vrj4s07rheku66t5r3.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={(res) => { this.props.setProf(res.profileObj); console.log(res.tokenId) }}
      onFailure={(res) => this.props.setProf(res.profileObj)}
      cookiePolicy={'single_host_origin'}
    />;
  }
}