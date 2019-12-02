import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { postLoginUser} from './UserFunctions'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password: '',
        token: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event){
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    postLoginUser(this.state.username, this.state.password);
    console.log("Bearer " + localStorage.getItem('access_token'))
    setTimeout(() => window.location.reload(), 1000);
  }

  render() {
      return (
        <MDBContainer >
          <MDBRow>
            <MDBCol className="center">
              <form>
                <p className="h4 text-center mb-4 md-form">Sign in</p>
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
                <div className="text-center mt-4">
                  <MDBBtn color="unique" type="submit"
                  onClick={this.handleSubmit}
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )
    
  }
}

export default Login;