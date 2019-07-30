import React from 'react';
import Option from './Option';

export default function Options({options}) {
    var tempList = options.map((v) => (
      <div key={v}>
        <Option name={v} />
      </div>
    ));
    return <div>
      {tempList}
    </div>;
  }