import styled from "styled-components";

const Card = (props) => {
  return <Module>{props.children}</Module>;
};

export default Card;

const Module = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`;
