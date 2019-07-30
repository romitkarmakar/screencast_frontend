import React from 'react';

export default function Option({name}) {
    return <div className="p-1">
      <div className="custom-control custom-radio">
    <input type="radio" className="custom-control-input" id={name} name="DefaultOptions" />
    <label className="custom-control-label" htmlFor={name}>{name}</label>
  </div>
    </div>;
  }