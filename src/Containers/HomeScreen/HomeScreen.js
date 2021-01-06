import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import HomeScreenStyled from "./HomeScreenStyled";

import Customers from "../Customers";

const HomeScreen = ({ theme }) => (
  <HomeScreenStyled theme={theme}>
    <Customers />
  </HomeScreenStyled>
);

export default withTheme(HomeScreen);
