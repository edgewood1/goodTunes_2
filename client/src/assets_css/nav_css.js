import styled from "styled-components";

// props: logOut, changeScrape,

export const Wrapper = styled.div`
display: flex
justify-content: center;
`;

export const HeaderWrapper = styled.div`
  margin: 3% 5% 0 5%;
  border-radius: 2.5%;
  border: 2px ridge #f5d21f;
  width: 85%;
  background-color: #29648a;
  color: white;
  font-family: "Lato", sans-serif;
`;
export const Header = styled.div`
  padding: 3%;

  border-radius: 4%;
`;
export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;

  margin: 0 5% 2% 5%;
`;

export const Button = styled.div`
  padding: 1%;
  border-radius: 10%;
  background-color: #2e9cca;
  text-align: center;
`;