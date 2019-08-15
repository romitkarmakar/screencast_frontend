import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import '../custom.css'

export default function FacebookSignIn(props) {
    return <FacebookLogin
        appId="2749120435101395"
        autoLoad={false}
        fields="name,email,picture"
        callback={(response) => console.log(response)}
        className="p-3 float-right"
        render={renderProps => (
            <button onClick={renderProps.onClick} className="m-2 align-middle loginBtn loginBtn--facebook">Facebook</button>
          )} />
}