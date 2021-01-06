import React, { useContext } from "react";
import { withTheme } from "styled-components";
import HomeScreenStyled from "./HomeScreenStyled";
import AppContext from "../../state/AppContext";

import Customers from "../Customers";

const HomeScreen = ({ theme }) => {
  const { app } = useContext(AppContext);
  //   const { selectedCustomer } = app;

  return (
    <HomeScreenStyled theme={theme}>
      <Customers />
      {/* {Object.keys(selectedCustomer).length && <SelectedCustomerModal selectedCustomer={selectedCustomer} />} */}
    </HomeScreenStyled>
  );
};

export default withTheme(HomeScreen);
