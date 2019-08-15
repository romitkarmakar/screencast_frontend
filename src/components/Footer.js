import React from 'react';
import logo from '../images/glug.svg';

export default () => {
    return <div className="bg-transparent p-3">
        <span className="text-center mx-auto d-block text-white"><b>Hosted and Created by:</b> GNU Linux Users Group(GLUG)</span>
        <img src={logo} alt="GLUG" height="50" className="mx-auto d-block mt-2"/>
    </div>
}