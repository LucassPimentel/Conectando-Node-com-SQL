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
const Home = () => {
  return (
    <ContainerDiv>
      <h1>BSB Mecânica</h1>
      <span>
        <h4>
          Clique <Link to={"/CreatePiece"}>aqui</Link> e cadastre suas peças
        </h4>
      </span>
      <ButtonStyle>
        <Link to={"/Pieces"}>Peças cadastradas</Link>
      </ButtonStyle>
    </ContainerDiv>
  );
};

export default Home;
