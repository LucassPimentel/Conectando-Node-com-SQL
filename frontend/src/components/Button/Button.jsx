import React from "react";
import styledcomponents from "styled-components";

const ButtonStyle = styledcomponents.button`
padding: 5px;
width: 80px;
border-radius: 5px;
border: 1px solid white;
cursor: pointer;
transition: 0.5s;
box-shadow: 1px 1px 4px black;

&:hover {
  border: 1px solid black;
}`;

const Button = ({ type, name, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} type={type}>
      {name}
    </ButtonStyle>
  );
};

export default Button;
