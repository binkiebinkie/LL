import { createContext } from "react";
// General App State
const AppContext = createContext({
  selectedCustomer: {},
  updateApp: () => {}
});

export default AppContext;
