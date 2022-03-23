import axios from "axios";
import { React, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const EditPiece = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/pecas/${id}`)
      .then((res) => reset(res.data));
  }, [id, reset]);

  const updatePiece = (data) => {
    try {
      axios.put(`http://localhost:8080/Alterpecas/${id}`, data);
      alert("Peça alterada!");
      navigate("/Pieces");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro, redirecionando ao início");
      navigate("/Home");
    }
  };

  return (
    <ContainerDiv>
      <ContainerAllForm>
        <h1>Alterar Peça</h1>
        <Form onSubmit={handleSubmit(updatePiece)}>
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
            <Link to={"/Pieces"}>
              <Button name="Voltar" type="button" />
            </Link>
            <Button name="Alterar" type="submit" />
          </ContainerButtons>
        </Form>
      </ContainerAllForm>
    </ContainerDiv>
  );
};

export default EditPiece;
