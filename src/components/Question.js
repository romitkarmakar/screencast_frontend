import React from 'react';

export default function Question({ question, imageHint }) {
  var imageArr = imageHint.split("/")
  if (imageArr[imageArr.length - 1] !== "Not%20Available")
    return <div>
      <h5 className="text-white">{decodeURI(question)}</h5>
      <div className="container p-3">
        <img src={imageHint} alt="Question" className="img-thumbnail mx-auto d-block" style={{maxHeight: '25vh'}}/>
      </div>
    </div>
  else
    return <div>
      <h5 className="text-white">{decodeURI(question)}</h5>
    </div>
};