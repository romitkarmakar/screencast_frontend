import React from 'react';

export default function Question({ question, imageHint }) {
  return (
    <div>
      <h5 className="text-white">{decodeURI(question)}</h5>
      <div className="container p-3">
        <img src={imageHint} alt="Question" className="img-thumbnail mx-auto d-block" />
      </div>
    </div>
  );
};