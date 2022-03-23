import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styledcomponents from "styled-components";
import Button from "../Button/Button";

const Container = styledcomponents.div`
// background-color: red;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;
`;
const ContainerPieces = styledcomponents.div`
// background-color: blue;
display: flex;
height: 100vh;
width: 100vw;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`;
const ContainerPiece = styledcomponents.div`
background-color: #cdcdcd;
border-radius: 8px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
width: 15vw;
height: 10vw;
gap: 0.5em;
`;
const ContainerButtons = styledcomponents.div`
// background-color: red;
display: flex;
justify-content: center;
gap: 0.5em;F
`;
const TitleStyle = styledcomponents.h1`
background-color: white;
padding: 0.5em;
border-radius: 5px;
margin-top: 1em;
`;
const Piece = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:8080/pecas").then((res) => {
        setPieces(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deletePiece = (id) => {
    axios.delete(`http://localhost:8080/pecas/${id}`);
    setPieces(pieces.filter((piece) => piece.id !== id));
  };

  return (
    <Container>
      <TitleStyle>Peças cadastradas</TitleStyle>
      <Link to={"/Home"}>
        <Button name={"Voltar"} type={"button"} />
      </Link>
      <ContainerPieces>
        {pieces.map((piece) => {
          return (
            <ContainerPiece key={piece.id}>
              <span>
                <h3>Nome da peça:</h3> {piece.namePiece}
              </span>
              <span>
                <h3>Valor da peça:</h3> R$ {piece.valuePiece.toLocaleString('pt-BR')}
              </span>
              <ContainerButtons>
                <Button
                  name={"Excluir"}
                  type={"button"}
                  onClick={() => deletePiece(piece.id)}
                />
                <Link to={`/EditPiece/${piece.id}`}>
                  <Button name={"Alterar"} type={"button"} />
                </Link>
              </ContainerButtons>
            </ContainerPiece>
          );
        })}
      </ContainerPieces>
    </Container>
  );
};

export default Piece;
