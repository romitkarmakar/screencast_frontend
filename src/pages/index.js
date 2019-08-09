import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout";
import '../custom.css';

import Typed from 'typed.js';

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
            <button className="btn btn-success btn-lg mt-2">Enter the Contest</button>
          </div>
        </div>
      </DashboardLayout>
    </div>
  }
}

export default IndexPage
