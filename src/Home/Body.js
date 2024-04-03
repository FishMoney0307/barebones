import React from 'react';
import './Body.css';
import Submit from './Submit.js';
import Description from './Description.js';
import DBList from './DBList.js';
import CRUD from '../CRUD/CRUD.js';

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
        <div>
          <div className="smallContainer" style={{marginTop: "50px", marginBottom: "50px"}}>
            
          </div>
          <div className="smallContainer" style={{marginTop: "50px", marginBottom: "50px"}}>
            <CRUD />
          </div>
        </div>
      </div>
    </body>
  )
}

export default Body