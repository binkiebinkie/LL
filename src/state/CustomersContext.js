import { createContext } from "react";
// Array of customers state
const CustomersContext = createContext({
  customers: []
});

export default CustomersContext;
