import React from 'react';
import Question from '../components/Question';
import Answer from '../components/Answer';
import axios from 'axios';
import AudioHint from '../components/AudioHint';
import AnswerAlert from '../components/AnswerAlert';
import { navigate } from 'gatsby';

export default class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      problems: null,
    };

    this.submitAns = this.submitAns.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.checkAns = this.checkAns.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var self = this;
    console.log(this.state.email)
    axios.get(`https://api.screencast.trennds.com/quiz/getQuestion?email=${localStorage.email}`).then(function (response) {
      if(response.data.status == 200) {
        self.setState((state, props) => ({
          problems: response.data,
        }));
      } else {
        navigate('/completed')
      }
    }).catch(function (error) {
      navigate('/completed')
    });
  }

  submitAns(answer) {
    var self = this
    this.checkAns(answer).then((value) => {
      if (value === 1) {
        self.fetchData()
      }
    })
  }

  checkAns(answer) {
    var self = this
    return new Promise(function (resolve, reject) {
      try {
        axios.get(`https://api.screencast.trennds.com/quiz/checkAnswer?answer=${answer}&email=${localStorage.email}`).then(function (response) {
          AnswerAlert(response.data.isTrue)
          resolve(response.data.isTrue)
        });
      } catch (e) {
        AnswerAlert(-1);
      }
    })
  }

  render() {
    if (this.state.problems !== null)
      return <div>
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-2"></div>
            <div className="col-sm-6 col-lg-8 mt-4">
              <div className="card bg-transparent">
                <div className="card-header bg-transparent">
                  <img src="https://img.icons8.com/color/48/000000/document.png" className="float-left" alt="Document-Icon" />
                  <h2 className="text-white align-middle mt-1">Question</h2>
                </div>
                <div className="card-body">
                  <Question question={this.state.problems.question} imageHint={this.state.problems.image} />
                  <AudioHint audioUrl={this.state.problems.audio} />
                  <Answer onSubmit={this.submitAns} />
                </div>
              </div>
              <div className="d-none d-md-block col-2"></div>
            </div>
          </div>
        </div>
      </div>
        ;
    else
      return <div className="container p-5">
        <div className="spinner-border mx-auto d-block m-5 text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
  }
}