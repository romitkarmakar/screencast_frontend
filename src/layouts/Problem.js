import React from 'react';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Navbar from './Navbar';
import axios from 'axios';
import AudioHint from '../components/AudioHint';

export default class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currTime: 5,
      currIndex: 0,
      problems: []
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.tick = this.tick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    setInterval(this.tick, 1000);

    if (localStorage.time) {
      this.setState({
        currTime: localStorage.time
      });
    }
  }

  tick() {
    if (this.state.currTime > 0) {
      this.setState((state, props) => ({
        currTime: state.currTime - 1
      }));

      localStorage.setItem("time", this.state.currTime);
    }
  }

  fetchData() {
    var self = this;
    axios.get("https://opentdb.com/api.php?amount=5&type=boolean").then(function (response) {
      self.setState((state, props) => ({
        problems: [...state.problems, ...response.data.results]
      }));
    });
  }

  next() {
    if (this.state.currIndex < this.state.problems.length) {
      console.log(this.state.currIndex);
      this.setState((state, props) => ({
        currIndex: state.currIndex + 1
      }));
    } else {
      this.setState({
        currIndex: 0
      });
      this.fetchData();
    }
  }

  prev() {
    if (this.state.currIndex > 0) {
      console.log(this.state.currIndex);
      this.setState((state, props) => ({
        currIndex: state.currIndex - 1
      }));
    } else {
      this.setState((state, props) => ({
        currIndex: 0
      }));
    }
  }

  render() {
    if (this.state.problems.length !== 0)
      return <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h3 className="float-right">{this.state.currTime} seconds left</h3>
              <div className="card m-5">
                <div className="card-header">
                  <h2>Question {this.state.currIndex + 1}/{this.state.problems.length}</h2>
                </div>
                <div className="card-body">
                  <Question question={this.state.problems[this.state.currIndex].question} />
                  <AudioHint />
                  <Answer />
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary float-right m-2" onClick={this.next}>Next &gt;</button>
                  <button className="btn btn-secondary float-right m-2" onClick={this.prev}>&lt; Prev</button>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
        ;
    else
      return <div className="container">
        <div className="spinner-border mx-auto d-block" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
  }
}