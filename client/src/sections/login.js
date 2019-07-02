import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import API from "../utils/API";
import {Container, Row, Input, LogButton} from '../assets_css/login_css'


class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(event.target.value)

    event.target.value === "Login"
      ? API.login(data).then(res => {
          if (res.data._id) {
            this.getTunes(res.data._id);
          } else {
            this.props.changeState({
              message: res.data.message,
              login: false
            });
          }
        })
      : API.register(data).then(res => {
        console.log(res)
          this.props.changeState({
            message: res.data.message.message,
            id: res.data.user._id,
            login: true,
            db: false
          });
        });
  };

  googleLogin = e => {
    e.preventDefault();
    console.log("hit");
    axios
      .get("/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(function(response) {
        console.log(response);
      });
  };

  getTunes = id => {
    API.getSavedTunes(id).then(res => {
      var message;
      res.data.message
        ? (message = res.data.message)
        : (message = "You have " + res.data.length + " saved tunes.");
      this.props.changeState({
        message: message,
        login: true,
        id: id,
        logInShow: 0,
        allTunesShow: 0,
        userTunes: res.data
      });
    });
  };

 

  render() {
    return (
      <Container>
        <form>
          <Row>
            <label htmlFor="username">Username: </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <label htmlFor="password">Password: </label>
            <Input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <LogButton
              value="Login"
              onClick={this.handleLogin}         
            >
              Login
            </LogButton>
            <LogButton
              value="Register"
              onClick={this.handleLogin}
            >
              Register
            </LogButton>
          </Row>

          <Row>
            <Router>
              {/* <ul> */}
              {/* <li> */}
              {/* <Link to="/auth/google"> GOOGLE</Link> */}
              {/* <a href="/auth/google">Google </a> */}
              {/* <button
                    onClick={this.googleLogin}
                    style={{
                      color: "black",
                      marginLeft: "5%",
                      background: "#f5d21f",
                      listStyleType: "none"
                    }}
                  >
                    {" "}
                    Google Plus{" "}
                  </button> */}
              {/* <PrivateRoute path="/protected" component={Protected} /> */}
              {/* </li> */}
              {/* </ul> */}
            </Router>
          </Row>
        </form>
      </Container>
    );
  }
}

export default Login;
