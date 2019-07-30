import React from 'react';
import Question from '../components/Question';
import Options from '../components/Options';
import data from '../data.json';

export default class Problem extends React.Component {
    render() {
      return <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
          <div className="card m-5">
        <div className="card-header">
           <Question question={data.question}/>
        </div>
        <div className="card-body">
           <Options options={data.options}/>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary float-right">Submit</button>
        </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      </div>;  }
  }