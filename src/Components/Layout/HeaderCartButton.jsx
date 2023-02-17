import styled, { css } from "styled-components";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import Cartcontext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(Cartcontext);
  const { items } = cartCtx;

  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button
      onClick={props.onClick}
      className={btnIsHighlighted ? "new-class" : ""}
      clicked={btnIsHighlighted}
    >
      <Icon>
        <CartIcon></CartIcon>
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  :hover,
  :active {
    background-color: #2c0d00;
  }

  ${(props) =>
    props.clicked &&
    css`
      animation: bump 300ms ease-out;

      @keyframes bump {
        0% {
          transform: scale(1);
        }
        10% {
          transform: scale(0.9);
        }
        30% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.15);
        }
        100% {
          transform: scale(1);
        }
      }
    `}
`;

const Icon = styled.div`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.button`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  :hover,
  :active {
    background-color: #92320c;
  }
`;
