import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import axios from 'axios';

export default class LeaderBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerRanks: []
        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var self = this
        axios.get("http:///api.screencast.trennds.com/Project/quiz/leaderboard").then((response) => {
            if (response.data) {
                var temp = response.data.map((v) => {
                    return <div className="alert alert-primary" role="alert">
                        {v.name}
                        <span className="float-right">{v.score}</span>
                    </div>
                })
                self.setState({
                    playerRanks: temp
                })
            }

        })
    }
    render() {
        if (this.state.playerRanks !== [])
            return <DashboardLayout>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="card p-3">
                                <h1 className="mx-auto d-block">LeaderBoard</h1>
                                <hr />
                                {this.state.playerRanks}
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </DashboardLayout>
        else
            return <DashboardLayout></DashboardLayout>
    }
}