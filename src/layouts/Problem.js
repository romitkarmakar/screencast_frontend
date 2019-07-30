import React from 'react';
import Question from '../components/Question';
import Options from '../components/Options';
import Navbar from './Navbar';
import axios from 'axios';

export default class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      problems: []
    };

    this.submitClick = this.submitClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var self = this;
    axios.get("https://opentdb.com/api.php?amount=5&type=multiple").then(function (response) {
      self.setState((state, props) => ({
        problems: [...response.data.results]
      }));
    });
  }

  submitClick() {
    if (this.state.currIndex < this.state.problems.length) {
      console.log(this.state.currIndex);
      this.setState((state, props) => ({
        currIndex: state.currIndex + 1
      }));
    } else {
      this.fetchData();
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
              <div className="card m-5">
                <div className="card-header">
                  <Question question={this.state.problems[this.state.currIndex].question} />
                </div>
                <div className="card-body">
                  <Options options={[...this.state.problems[this.state.currIndex].incorrect_answers, this.state.problems[this.state.currIndex].correct_answer]} />
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary float-right" onClick={this.submitClick}>Submit</button>
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