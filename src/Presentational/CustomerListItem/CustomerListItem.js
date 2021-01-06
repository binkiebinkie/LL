import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

import ic_cancel_black_24px from "../../assets/ic_cancel_black_24px.svg";

const CustomerListItemStyled = styled.div`
  max-width: 100%;
  padding: 16px;
  display: flex;
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
    &close {
      width: 24px;
      height: 24px;
      margin-left: 4px;
      cursor: pointer;
    }

    &view {
      display: flex;
      align-items: center;

      @media (max-width: 550px) {
        margin-top: 8px;
      }

      &.loading {
        opacity: 0.4;
      }
    }
  }

  @media (max-width: 550px) {
    width: 550px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CustomerListItem = ({
  theme,
  customer,
  updateApp,
  loading,
  customer: { business_name, city, province }
}) => (
  <CustomerListItemStyled theme={theme}>
    <div className="customers--customer__listItem--business">
      <h3>{business_name}</h3>
      <span>
        {city}, {province}
      </span>
    </div>
    <div
      className={`customers--customer__listItem--view ${
        loading ? "loading" : ""
      }`}
    >
      <button
        className="default__button"
        onClick={() => updateApp("selectedCustomer", customer)}
      >
        View
      </button>
      <div className="customers--customer__listItem--close">
        <img alt="remove customer icon" src={ic_cancel_black_24px} />
      </div>
    </div>
  </CustomerListItemStyled>
);

export default withTheme(CustomerListItem);
