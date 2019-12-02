import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { postRegisterUser } from './UserFunctions';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        username:'',
        email: '',
        password: '',
        confirmPassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event){
    const { password, confirmPassword } = this.state;
    if(password !== confirmPassword){
      alert("Password don't match!");
    }else{
      postRegisterUser(this.state.username, this.state.email, this.state.password);
    }
    event.preventDefault();
  }

  render() {
    return (
      <MDBContainer >
        <MDBRow>
          <MDBCol className="center">
            <form>
              <p className="h4 text-center mb-4 md-form">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Username
              </label>
              <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              name="username"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                name="email"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                name="password"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Confirm Password
                </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                name="confirmPassword"
                onChange={this.handleChange}
                />
                
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit"
                onClick={this.handleSubmit}
                >
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default Register;