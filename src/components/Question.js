import React from 'react';

export default function Question({ question }) {
  return (
    <div>
      <h5>{decodeURI(question)}</h5>
      <div className="container p-3">
        <img src="https://placekitten.com/500/100" alt="Question" className="img-thumbnail mx-auto d-block" />
      </div>
    </div>
  );
};