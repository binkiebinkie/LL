import React, { useContext } from "react";
import { withTheme } from "styled-components";
import HomeScreenStyled from "./HomeScreenStyled";
import AppContext from "../../state/AppContext";

import Customers from "../Customers";
import SelectedCustomerModal from "../SelectedCustomerModal";

const HomeScreen = ({ theme }) => {
  const { app } = useContext(AppContext);

  return (
    <HomeScreenStyled theme={theme}>
      <Customers />
      {app &&
      Object.keys(app).length &&
      Object.keys(app.selectedCustomer).length ? (
        <SelectedCustomerModal selectedCustomer={app.selectedCustomer} />
      ) : null}
    </HomeScreenStyled>
  );
};

export default withTheme(HomeScreen);
