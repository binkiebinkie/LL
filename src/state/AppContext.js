import { createContext } from "react";
// General App State
const AppContext = createContext({
  selectedCustomer: null
});

export default AppContext;
