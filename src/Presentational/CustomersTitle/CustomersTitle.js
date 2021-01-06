import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

const CustomersTitleStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  background-color: ${props => props.theme.G3};
  border-radius: 8px 8px 0 0;

  h1 {
    color: ${props => props.theme.primary};
    text-transform: uppercase;
    font-size: 16px;
  }
`;

const CustomersTitle = ({ theme }) => (
  <CustomersTitleStyled theme={theme}>
    <h1>My Customers</h1>
  </CustomersTitleStyled>
);

export default withTheme(CustomersTitle);
