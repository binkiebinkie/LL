import React, { useContext } from "react";
import { withTheme } from "styled-components";
import CustomersContext from "../../state/CustomersContext";
import AppContext from "../../state/AppContext";

import CustomersStyled from "./CustomersStyled";
import CustomersTitle from "../../Presentational/CustomersTitle";
import CustomersFooter from "../../Presentational/CustomersFooter";
import CustomerListItem from "../../Presentational/CustomerListItem";

const Customers = ({ theme }) => {
  const { customers } = useContext(CustomersContext);
  const { updateApp } = useContext(AppContext);

  return (
    <CustomersStyled theme={theme}>
      <CustomersTitle />
      {customers.map(customer => (
        <CustomerListItem customer={customer} updateApp={updateApp} />
      ))}
      <CustomersFooter />
    </CustomersStyled>
  );
};

export default withTheme(Customers);
