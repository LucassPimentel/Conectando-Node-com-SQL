import React from "react";
import { Link } from "react-router-dom";
import styledcomponents from "styled-components";

const ContainerDiv = styledcomponents.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
gap: 1em;
`;
const ButtonStyle = styledcomponents.button`
padding: 8px;
width: 100px;
border-radius: 5px;
border: 1px solid white;
cursor: pointer;
transition: 0.5s;
box-shadow: 1px 1px 4px black;
font-size: 1em;
&:hover {
  border: 1px solid black;
}`;
const SpanStyle = styledcomponents.span`
color: black;
text-decoration: underline;
`;
const TitleStyle = styledcomponents.h1`
background-color: white;
padding: 0.5em;
border-radius: 5px;
`;

const Home = () => {
  return (
    <ContainerDiv>
      <TitleStyle>BSB Mecânica</TitleStyle>
      <span>
        <h3>
          Clique{" "}
          <Link to={"/CreatePiece"}>
            <SpanStyle>aqui</SpanStyle>
          </Link>{" "}
          e cadastre suas peças.
        </h3>
      </span>
      <ButtonStyle>
        <Link to={"/Pieces"}>
          <SpanStyle>Peças cadastradas</SpanStyle>
        </Link>
      </ButtonStyle>
    </ContainerDiv>
  );
};

export default Home;
