import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import axios from 'axios';
import AnswerAlert from '../components/AnswerAlert';

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
        axios.get("http://134.209.155.37/quiz/leaderboard").then((response) => {
            if (response.data.length != 0) {
                var temp = response.data.map((v, index) => {
                    return <div className="alert" role="alert" key={index}>
                        <span className="text-white mr-2">{v.rank}. </span>
                        <img src={v.image} alt={v.name} className="img-circle" height="50" />
                        <span className="ml-2 text-capitalize text-white">{v.name}
                            <span className="float-right align-middle text-white">{v.score}</span>
                        </span>
                        <hr/>
                    </div>
                })
                self.setState({
                    playerRanks: temp
                })
            } else {
                self.setState({
                    playerRanks: <div>No data to show</div>
                })
            }

        }).catch((error) => {
            AnswerAlert(-1)
        })
    }
    render() {
        if (this.state.playerRanks.length !== 0)
            return <DashboardLayout>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="card p-3 bg-transparent">
                                <h1 className="mx-auto d-block text-white">LeaderBoard</h1>
                                <hr />
                                {this.state.playerRanks}
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </DashboardLayout>
        else
            return <DashboardLayout>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="card p-3 bg-transparent">
                                <h1 className="mx-auto d-block text-white">LeaderBoard</h1>
                                <hr />
                                <div className="container">
                                    <div className="spinner-border mx-auto d-block" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </DashboardLayout>
    }
}
