import React from 'react';

export default function Answer(props) {

    return (
        <div>
            <input className="form-control" placeholder="Enter your answer" value={props.answer} onChange={(e) => props.setAnswer(e.target.value)}/>
        </div>
    );
}