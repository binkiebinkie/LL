import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

const CustomerInfoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  div {
    border-bottom: 2px solid ${props => props.theme.G4};
    text-transform: uppercase;
    font-size: 14px;
    color: ${props => props.theme.G2};
    font-weight: bold;
  }

  h4,
  select {
    font-size: 16px;
    margin-top: 2px;
  }
`;

const CustomerInfo = ({ theme, label, value }) => (
  <CustomerInfoStyled theme={theme}>
    <div>{label}</div>
    {value === "select" ? (
      <select placeholder="Select a catalog">
        <option value="Select a catalog">Select a catalog</option>
        <option value="Catalog 1">Catalog 1</option>
        <option value="Catalog 2">Catalog 2</option>
        <option value="Catalog 3">Catalog 3</option>
      </select>
    ) : (
      <h4>{value}</h4>
    )}
  </CustomerInfoStyled>
);

export default withTheme(CustomerInfo);
