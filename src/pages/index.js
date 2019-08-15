import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout";
import "../custom.css"

import Typed from 'typed.js';
import GoogleSignIn from "../components/GoogleSignIn";
import FacebookSignIn from "../components/FacebookSignIn";

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
            <h1 className="display-4">Screencast Quiz</h1>
            <h3>Competition to <span className="element"></span></h3>
            <Link to="/dashboard/">
              <GoogleSignIn/>
              <FacebookSignIn/>
            </Link>
          </div>
        </div>
        <div className="container-fluid p-3 bg-transparent">
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
            <div className="card prize">
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
