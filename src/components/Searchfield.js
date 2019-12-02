import React, { Component } from 'react';
import './Homepage.css';

class Searchfield extends Component {

  render() {
    return (
      <div className="container-full bg-dark">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search Project"/>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
              </button>
          </div>
        </div>
    )
  }

}

export default Searchfield