import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

const CustomerListItemStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.pureWhite};
  border-bottom: 1px solid ${props => props.theme.G2};

  .customers--customer__listItem-- {
    &business {
      h3 {
        color: ${props => props.theme.greyText};
        text-transform: capitalize;
        font-size: 16px;
      }
      span {
        color: ${props => props.theme.G4};
        text-transform: capitalize;
        font-size: 14px;
      }
    }

    &view {
      button {
        background-color: ${props => props.theme.primary};
        padding: 8px 12px;
        color: ${props => props.theme.pureWhite};
        text-transform: uppercase;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.G5};
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const CustomerListItem = ({
  theme,
  customer,
  updateApp,
  customer: { business_name, city, province }
}) => (
  <CustomerListItemStyled theme={theme}>
    <div className="customers--customer__listItem--business">
      <h3>{business_name}</h3>
      <span>
        {city}, {province}
      </span>
    </div>
    <div className="customers--customer__listItem--view">
      <button onClick={() => updateApp("selectedCustomer", customer)}>
        View
      </button>
      {/* <image /> */}
    </div>
  </CustomerListItemStyled>
);

export default withTheme(CustomerListItem);
