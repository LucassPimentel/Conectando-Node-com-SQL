import axios from "axios";
import { React, useEffect, useState } from "react";
import styledcomponents from "styled-components";
import Button from "../Button/Button";

const Container = styledcomponents.div`
// background-color: red;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
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
gap: 0.5em;
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
      <h1>Peças cadastradas</h1>
      <ContainerPieces>
        {pieces.map((piece) => {
          return (
            <ContainerPiece key={piece.id}>
              <span>
                <h3>Nome da peça:</h3> {piece.namePiece}
              </span>
              <span>
                <h3>Valor da peça:</h3> {piece.valuePiece}
              </span>
              <ContainerButtons>
                <Button name={"Excluir"} type={"button"} onClick={() => deletePiece(piece.id)} />
                <Button name={"Alterar"} type={"button"} />
              </ContainerButtons>
            </ContainerPiece>
          );
        })}
      </ContainerPieces>
    </Container>
  );
};

export default Piece;
