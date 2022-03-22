import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styledcomponents from "styled-components";
import Button from "../Button/Button";

const ContainerDiv = styledcomponents.div`
// background-color: red;
height: 100vh;
display: flex;
justify-content: center;
`;
const ContainerAllForm = styledcomponents.div`
  background-color: #dcdcdc;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  height: 45vh;
  width: 25vw;
  text-align: center;
  justify-content: center;
`;
const Form = styledcomponents.form`
// background-color: blue;
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;
`;
const ContainerButtons = styledcomponents.div`
// background-color: yellow;
height: 6vh;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
`;
const MessageStyle = styledcomponents.span`
font-size: 0.8em;
background-color: rgba(255, 0, 0, 0.473);
padding: 1px;
font-weight: bolder;
`;

const CreatePiece = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleAddPiece = (data, e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/cadastrar", data).then(() => {
        alert("Peça cadastrada com sucesso");
        navigate("/Home");
      });
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro, redirecionando para o início");
      navigate("/Home");
    }
  };

  return (
    <ContainerDiv>
      <ContainerAllForm>
        <h1>Cadastrar Peça</h1>
        <Form onSubmit={handleSubmit(handleAddPiece)}>
          {errors.namePiece?.type === "required" && (
            <MessageStyle>Nome Obrigatório</MessageStyle>
          )}

          <label htmlFor="namePiece">Nome da Peça:</label>
          <input
            {...register("namePiece", { required: true, maxLength: 50 })}
            id="namePiece"
            type="text"
          />
          {errors.valuePiece?.type === "required" && (
            <MessageStyle>Valor Obrigatório</MessageStyle>
          )}
          <label htmlFor="valuePiece">Valor da Peça:</label>
          <input
            {...register("valuePiece", { required: true, maxLength: 10 })}
            id="valuePiece"
            type="number"
          />
          <ContainerButtons>
            <Link to={"/Home"}>
              <Button name="Voltar" type="button" />
            </Link>
            <Button name="Cadastrar" type="submit" />
          </ContainerButtons>
        </Form>
      </ContainerAllForm>
    </ContainerDiv>
  );
};

export default CreatePiece;
