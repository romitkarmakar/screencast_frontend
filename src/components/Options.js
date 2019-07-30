import React from 'react';
import Option from './Option';

export default function Options({options}) {
    var tempList = options.map((v) => (
      <Option name={v} />
    ));
    return <div>
      {tempList}
    </div>;
  }