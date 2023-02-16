import styled from "styled-components";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <CartItems>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </CartItems>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>35.62</span>
      </Total>
      <Actions>
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </Actions>
    </Modal>
  );
};

export default Cart;

const CartItems = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  .button--alt {
    color: #8a2b06;
  }

  .button {
    background-color: #8a2b06;
    color: white;
  }
`;
