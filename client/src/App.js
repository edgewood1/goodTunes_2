import React from "react";
import styled from "styled-components";
import Container from "./sections/container.js";
import Nav from "./sections/nav.js";
import API from "./utils/API";
import Footer from "./components/footer";

const Height = styled.div``;

const Width = styled.div`
  min-height: 100%;
  border: 3px solid yellow;
  width: 100%;
  background: #464866;
`;

class App extends React.Component {


  state = {
    allTunesShow: 1,
    logInShow: 0,
    added: 0,
    play: 0,

    login: false,
    id: 0,
    message: "Logged Out",

    allTunes: [],
    userTunes: [],
    playerID: 0
  };

  changeState = x => {
    // this.setState(x);
    this.setState(x, () => console.log(this.state));
  };

  getTunes = () => {
    API.getSavedTunes(this.state.id).then(res => {
      var add = res.data.filter((e, i) => {
        return !this.state.savedTunes.includes(e);
      });

      this.setState({ savedTunes: add });
    });
  };

  render() {
    return (
      <Width>
        <Nav appData={this.state} changeState={this.changeState} />

        <Height>
          <Container appData={this.state} changeState={this.changeState} />
        </Height>
        <Footer />
      </Width>
    );
  }
}

export default App;
