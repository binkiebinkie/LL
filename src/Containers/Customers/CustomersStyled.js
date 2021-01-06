import styled from "styled-components";

const CustomersStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.G3};
`;

export default CustomersStyled;
