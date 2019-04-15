import React, { Component } from "react";
import API from "../utils/API";
// import { Nav } from "semantic-ui-react";

import styled from "styled-components";

// props: logOut, changeScrape,

const Wrapper = styled.div`
display: flex
justify-content: center;

`;
const HeaderWrapper = styled.div`
  margin: 3% 5% 0 5%;
  border-radius: 4%;
  border: 1px solid yellow;
  width: 85%;
`;
const Header = styled.div`
  // margin: 2% 5% 0 5%;
  padding: 3%;
`;
const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 5% 2% 5%;
`;

const Button = styled.div`
  border: 1px solid black;
  padding: 0.5%;
  border-radius: 10%;
  background-color: #fcfcfc;
`;

export default class Nav extends Component {
  scrape = () => {
    this.props.changeState({ message: "Scraping... " });
    API.scrape()
      .then(res => {
        this.addScrapeToDb(res["data"]);
      })
      .catch(err => console.log(err));
  };

  addScrapeToDb = data => {
    // var count1 = this.props.appData.allTunes.length;
    API.addScrape(data).then(res => {
      var count2 = res.data.tunes.length;
      // (count1 + " -- " + count2);
      API.getPlaylist().then(res => {
        // var diff = Math.abs(count1 - count2);
        this.props.changeState({
          message: "You've added " + count2 + " new Tunes",
          allTunes: res.data
        });
      });
      // res.data.
    });
  };

  getPlaylist = () => {
    var count1 = this.props.appData.allTunes.length;
    API.getPlaylist()
      .then(res => {
        var count2 = res.data.length;
        var diff = Math.abs(count1 - count2);
        if (res["data"]) {
          this.props.changeState({
            allTunes: res["data"],
            message: "There were " + diff + " tunes to scrape"
          });
          this.setState({ tunes: res.data });
        }
      })
      .catch(err => {
        console.log(err);
        this.getPlaylist();
      });
  };

  getUserTunes = () => {
    if (this.props.appData.login) {
      this.props.changeState(
        {
          allTunesShow: 0
        },
        () => {
          this.newMessage();
        }
      );
    } else {
      this.props.changeState({
        message: "log in!",
        login: false,
        logInShow: 1
      });
    }
  };

  newMessage = () => {
    this.props.changeState({
      message:
        "You have " + this.props.appData.userTunes.length + " saved tunes."
    });
  };

  getAllTunes = () => {
    this.props.changeState({
      logInShow: 0,
      allTunesShow: 1,
      message: "All available Tunes"
    });
  };

  handleLogOut = () => {
    if (this.props.appData.login) {
      API.logout().then(res => {
        this.props.changeState({
          message: res.data.message,
          allTunesShow: 1,
          login: false,
          id: 0
        });
      });
    } else {
      this.props.changeState({ message: "already logged out!!" });
    }
  };

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>
            <h1 style={{ fontSize: "250%" }}>Good Tunes</h1>
            <h2> recommended tunes from the internet </h2>
          </Header>

          <Body>
            <Button onClick={() => this.scrape(this.props)}>
              Scrape New Tunes
            </Button>

            <Button onClick={() => this.getAllTunes(this.props)}>
              See Db Tunes
            </Button>

            <Button onClick={() => this.getUserTunes(this.props)}>
              Saved PlayList
            </Button>

            <Button onClick={this.handleLogOut}>LogOut</Button>
          </Body>
        </HeaderWrapper>
      </Wrapper>
    );
  }
}
