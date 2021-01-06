import styled from "styled-components";

const HomeScreenStyled = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding: 16px;
  background-color: ${props => props.theme.G1};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  button.default__button {
    background-color: ${props => props.theme.primary};
    padding: 8px 12px;
    color: ${props => props.theme.pureWhite};
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.G5};
    font-weight: bold;
    cursor: pointer;
  }
`;

export default HomeScreenStyled;
