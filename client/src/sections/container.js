import React from "react";
import { Wrapper, Col1, Col2 } from "../assets_css/container_css";
import PlayList from "./playList";
import Login from "./login";
import Player from "./player";

class Container extends React.Component {
  render() {
    const {
      appData: { play, playerID, message, logInShow }
    } = this.props;
    return (
      <Wrapper>
        <Col1>
          <Player play={play} playerID={playerID} message={message} />
        </Col1>
        <Col2>
          {logInShow ? (
            <Login
              changeState={this.props.changeState}
              appState={this.props.appData}
            />
          ) : (
            <PlayList
              changeState={this.props.changeState}
              appData={this.props.appData}
            />
          )}
        </Col2>
      </Wrapper>
    );
  }
}

export default Container;
