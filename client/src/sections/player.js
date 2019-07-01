import React from "react";
import Iframe from "react-iframe";
import {Container, Header, Header2, LargeFont} from '../assets_css/player_css'


class Player extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <LargeFont>{this.props.message}</LargeFont>
        </Header>
        <Header2>
          {this.props.play ? (
            <Iframe
              url={
                "https://open.spotify.com/embed?uri=spotify:track:" +
                this.props.playerID
              }
              width="100%"
              height="20%"
              position="relative"
            />
          ) : (
            <p />
          )}
        </Header2>
      </Container>
    );
  }
}

export default Player;
