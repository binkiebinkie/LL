import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";

const CustomersFooterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: ${props => props.theme.pureWhite};

  .customers--footer__pagination--container {
    display: flex;

    span,
    button {
      border-radius: 4px;
      padding: 4px;
      height: 25px;
      width: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      background-color: ${props => props.theme.pureWhite};
      border: 1px solid ${props => props.theme.G3};
    }

    span {
      margin: 0 8px;
      background-color: ${props => props.theme.G3};
    }
  }
`;

// TODO: make into functional button
const CustomersFooter = ({ theme }) => (
  <CustomersFooterStyled theme={theme}>
    <div className="customers--footer__pagination--container">
      <button>{"<"}</button>
      <span>1</span>
      <button>></button>
    </div>
  </CustomersFooterStyled>
);

export default withTheme(CustomersFooter);
