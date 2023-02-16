import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Main>
        <Meals></Meals>
      </Main>
    </CartProvider>
  );
}

export default App;

const Main = styled.main`
  /* background-color: rgba(0, 0, 0, 0.25); */
  background-color: #383838;
`;
