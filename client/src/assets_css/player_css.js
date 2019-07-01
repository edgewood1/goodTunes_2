import styled from "styled-components";
export const Container = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const LargeFont = styled.div`
  font-size: 1.5em;
  padding: 2%;
  background-color: #fcfcfc;
`;

export const Header = styled.div`
  order: 1;
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10%;
  margin: 2%;
  background-color: #fcfcfc;
`;

export const Header2 = styled.div`
  order: 2;

  flex-grow: 6;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5%;

  margin: auto;
`;