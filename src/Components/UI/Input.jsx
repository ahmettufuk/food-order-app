import styled from "styled-components";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const id = props.input.id;

  return (
    <InputDetail>
      <label htmlFor={id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputDetail>
  );
});

export default Input;

const InputDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
