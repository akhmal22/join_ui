import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class Searchfield extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="container-full bg-dark">
        <form>
          <div className="search">
            <input name="search" type="text" className="searchTerm" placeholder="Search Project" onChange={this.handleChange}/>
            <Button component={Link} to={{pathname: '/search/'+this.state.search}} style={{
              width: "40px",
              height: "36px",
              border: "px solid #00B4CC",
              background: "#00B4CC",
              textAlign: "center",
              color: "#fff",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
              fontSize: "20px"
            }}>
              <i className="fa fa-search"></i>
            </Button>
          </div>
        </form>
      </div>
    )
  }

}

export default Searchfield