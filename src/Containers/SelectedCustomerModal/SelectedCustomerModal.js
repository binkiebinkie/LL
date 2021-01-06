import React, { useContext } from "react";
import { withTheme } from "styled-components";
import AppContext from "../../state/AppContext";

import SelectedCustomerModalStyled from "./SelectedCustomerModalStyled";
import SelectedCustomerInfo from "../SelectedCustomerInfo";

const SelectedCustomerModal = ({ theme, selectedCustomer }) => {
  const { updateApp } = useContext(AppContext);
  return (
    <SelectedCustomerModalStyled
      theme={theme}
      onClick={() => updateApp("selectedCustomer", {})}
    >
      <SelectedCustomerInfo
        updateApp={updateApp}
        selectedCustomer={selectedCustomer}
      />
    </SelectedCustomerModalStyled>
  );
};

export default withTheme(SelectedCustomerModal);
