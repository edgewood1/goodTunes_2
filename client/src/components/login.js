import React from "react";
import styled from "styled-components";
import API from "../utils/API";
import Playlist from "./playList";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Container = styled.div`
  width: 50vw;
  order: 2;
`;

const Row = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: 4%;
  padding: 3%;
  color: white;
`;

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
          this.props.changeState({
            message: res.data.message,
            id: res.data._id,
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

  // function PrivateRoute({ component: Component, ...rest }) {
  //   console.log(...rest)

  // }

  render() {
    return (
      <Container>
        <form>
          <Row>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <button
              value="Login"
              onClick={this.handleLogin}
              style={{
                color: "black",
                marginRight: "5%",
                background: "#f5d21f"
              }}
            >
              Login
            </button>
            <button
              value="Register"
              onClick={this.handleLogin}
              style={{
                color: "black",
                marginLeft: "5%",
                background: "#f5d21f"
              }}
            >
              Register
            </button>
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
