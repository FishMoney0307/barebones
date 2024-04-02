import React from 'react';
import './Body.css';
import Submit from './Home/Submit.js';
import Description from './Home/Description.js';

const Body = () => {
  return (
    <body>
        <div className="bigContainer">
            <div>
            <div className="smallContainer">
                <div><Description /></div>
                <div><Submit /></div>
            </div>
            </div>
        </div>
    </body>
  )
}

export default Body