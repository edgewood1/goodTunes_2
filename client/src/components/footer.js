import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  padding: 1vh;
  @media only screen and (max-width: 800px) {
    padding: 2vh;
  }
`;

const Footer = () => {
  return <Foot />;
};

export default Footer;
