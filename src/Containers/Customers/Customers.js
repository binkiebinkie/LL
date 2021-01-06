import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import CustomersStyled from "./CustomersStyled";

const Customers = ({ theme }) => (
  <CustomersStyled theme={theme}>rendered</CustomersStyled>
);

export default withTheme(Customers);
