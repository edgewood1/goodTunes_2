import styled from "styled-components";

export const Container = styled.div`
  width: "50vw";
  order: "2";
  border: 1.5px ridge #f5d21f;
  border-right: none;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2.5px solid #f5d21f;
  border-radius: 5%;
  margin: 4%;
  padding: 3%;
  overflow: scroll;
  background-color: #2e9cca;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  // flex-grow: 2;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%
  align-content: center;
`;

export const LargeFont = styled.div`
  font-size: 1.5em;
  padding: 2%;
  color: white;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
}
`;

export const RateDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4%;
  // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const MedFont = styled.div`
  font-size: 1.25em;
  padding: 4%;
  font-weight: bold;
`;
