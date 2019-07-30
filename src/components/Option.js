import React from 'react';

export default function Option({name}) {
    return <div className="p-1">
      <div class="custom-control custom-radio">
    <input type="radio" className="custom-control-input" id={name} name="DefaultOptions" />
    <label className="custom-control-label" for={name}>{name}</label>
  </div>
    </div>;
  }