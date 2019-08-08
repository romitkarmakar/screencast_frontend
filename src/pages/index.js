import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import DashboardLayout from "../layouts/DashboardLayout";
import '../custom.css';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <DashboardLayout>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 mx-auto d-block">Fluid jumbotron</h1>
          <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </DashboardLayout>
  </div>
)

export default IndexPage
