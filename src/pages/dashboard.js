import React from "react"
import { Link } from "gatsby"

import DashboardLayout from '../layouts/DashboardLayout'
import Problem from '../layouts/Problem'
import SEO from "../components/seo"

export default function Dashboard() {
    return <DashboardLayout>
        <Problem/>
    </DashboardLayout>
}

