import React, { useContext } from "react";
import { withTheme } from "styled-components";
import CustomersContext from "../../state/CustomersContext";
import AppContext from "../../state/AppContext";

import CustomersStyled from "./CustomersStyled";
import CustomersTitle from "../../Presentational/CustomersTitle";
import CustomersFooter from "../../Presentational/CustomersFooter";
import CustomerListItem from "../../Presentational/CustomerListItem";

const loadingCustomer = {
  province: "ON",
  city: "Toronto",
  business_name: "Example Express"
};

const Customers = ({ theme }) => {
  const { customers } = useContext(CustomersContext);
  const { updateApp } = useContext(AppContext);

  return (
    <CustomersStyled theme={theme}>
      <CustomersTitle />
      {customers.length ? (
        customers.map(customer => (
          <CustomerListItem
            key={customer.business_name}
            customer={customer}
            updateApp={updateApp}
          />
        ))
      ) : (
        <CustomerListItem
          customer={loadingCustomer}
          updateApp={() => {}}
          loading
        />
      )}
      <CustomersFooter />
    </CustomersStyled>
  );
};

export default withTheme(Customers);
