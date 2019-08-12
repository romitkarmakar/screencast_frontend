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
      currQuestion: 1,
      problems: null,
      isTrue: null,
      answer: "",
      email: ""
    };

    this.next = this.next.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.checkAns = this.checkAns.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    var self = this;
    console.log(this.state.email)
    axios.get(`http://api.screencast.trennds.com/Project/quiz/getQuestion?email=${localStorage.email}`).then(function (response) {
      self.setState((state, props) => ({
        problems: response.data,
        currQuestion: state.currQuestion + 1
      }));
    }).catch(function (error) {
      navigate('/finish/')
    });
  }

  next() {
    var self = this
    this.checkAns().then((value) => {
      if (value === 1) {
        self.fetchData()
      }
    })
  }

  checkAns() {
    var self = this
    return new Promise(function (resolve, reject) {
      try {
        axios.get(`http://api.screencast.trennds.com/Project/quiz/checkAnswer?answer=${self.state.answer}&email=${localStorage.email}`).then(function (response) {
          self.setState((state, props) => ({
            isTrue: response.data.isTrue
          }));
          AnswerAlert(response.data.isTrue)
          resolve(response.data.isTrue)
        });
      } catch (e) {
        console.log("Error");
      }
    })
  }

  setAnswer(answer) {
    this.setState({
      answer: answer
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
                  <img src="https://img.icons8.com/color/48/000000/document.png" className="float-left" alt="ssf" />
                  <h2 className="text-white">Question</h2>
                </div>
                <div className="card-body">
                  <Question question={this.state.problems.question} imageHint={this.state.problems.image} />
                  <AudioHint audioUrl={this.state.problems.audio} />
                  <Answer index={this.state.currQuestion} setAnswer={this.setAnswer} currAnswer={this.state.answer} />
                </div>
                <div className="card-footer bg-transparent">
                  <button className="btn btn-success float-right m-2 pl-3" onClick={this.next}>
                    Submit
                    <img src="https://img.icons8.com/plasticine/26/000000/idea.png" alt="daf" />
                  </button>
                </div>
              </div>
              <div className="d-none d-md-block col-2"></div>
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