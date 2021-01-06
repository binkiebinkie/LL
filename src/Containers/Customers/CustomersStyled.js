import styled from "styled-components";

const CustomersStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.G2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default CustomersStyled;
