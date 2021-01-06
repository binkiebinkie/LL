import "./App.css";
import React, { useState, useEffect } from "react";
import AppContext from "./state/AppContext";
import CustomersContext from "./state/CustomersContext";
import { APICall } from "./util";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

import HomeScreen from "./Containers/HomeScreen";

const App = props => {
  // React's create context API probably isn't necessary for
  // a small app like this, as we could use hooks/local state
  // like below, but in this situation I wanted to showcase what
  // I think is the best case practice for a scalable app
  const [app, setApp] = useState({});
  const [customers, setCustomers] = useState([]);

  // When component loads, fetch data Async
  useEffect(() => {
    async function fetchData() {
      const resp = await APICall();

      // TODO: better error handling
      if (resp && resp.length) {
        setCustomers(resp);
      }
    }
    if (!customers.length) {
      fetchData();
    }
  }, []);

  // update app state to pass to app context
  // ambiguous value/key pair allows us to reuse same function
  // to update any key in app state, should there be more
  const updateApp = (value, key) => {
    // JSON.stringify to get state from string
    // and not accidentally mutuate state somehow
    let newApp = JSON.parse(JSON.stringify(app));
    newApp[key] = value;
    setApp(newApp);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ app, updateApp }}>
        <CustomersContext.Provider value={{ customers }}>
          <HomeScreen />
        </CustomersContext.Provider>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
