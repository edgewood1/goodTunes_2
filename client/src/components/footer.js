import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  padding: 3vh;
  @media only screen and (max-width: 800px) {
    padding: 5vh;
  }
`;

const Footer = () => {
  return <Foot />;
};

export default Footer;
