import styled from "styled-components";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInput = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5) </p>}
    </Form>
  );
};

export default MealItemForm;

const Form = styled.form`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  button:hover,
  button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
