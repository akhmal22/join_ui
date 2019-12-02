import React, { Component } from 'react';
import './Homepage.css';
import Searchfield from './Searchfield';

class Homepage1 extends Component {

  render() {
    return (
      <div className="bg-dark">
        <div className="col-sm-8 mx-auto">
            <h1 className="text-center white-text">
                JOIN
            </h1>
            <h6 className="text-center white-text">
                Wanna Join?
            </h6>
            <Searchfield/>
        </div>
      </div>
    )
  }

}

export default Homepage1