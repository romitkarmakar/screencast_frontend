import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout";
import "../custom.css"

import Typed from 'typed.js';
import GoogleSignIn from "../components/GoogleSignIn";

class IndexPage extends React.Component {
  componentDidMount() {
    var typed = new Typed('.element', {
      strings: ["show your talent to college.", "test your linux terminal skills.", "win exciting prizes and goodies."],
      typeSpeed: 50,
      backSpeed: 50,
    });
  }

  render() {
    return <div>
      <SEO title="Home" />
      <DashboardLayout>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 mx-auto d-block">Screencast Quiz</h1>
            <h3>Competition to <span className="element"></span></h3>
            <Link to="/dashboard/">
              <GoogleSignIn/>
            </Link>
          </div>
        </div>
        <div className="container-fluid p-3 bg-white">
          <h1 className="text-center mt-3">Welcome to ScreenCast Quiz</h1>
          <h4 className="text-center">One of the best competitions in the college.</h4>
          <hr/>
          <div className="row">
            <div className="col-12 col-lg-4 p-2">
              <div className="card prize">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">1</span>
                  <hr/>
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-2">
            <div className="card prize bb">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">2</span>
                  <hr/>
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 p-2">
            <div className="card prize">
                <div className="card-body mx-auto d-block">
                  <span className="display-1 text-center">3</span>
                  <hr/>
                  Prizes worth Rs.2000 + Exciting Goodies
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          
        </div>
      </DashboardLayout>
    </div>
  }
}

export default IndexPage
