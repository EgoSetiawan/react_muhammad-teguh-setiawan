import React from "react";
import RouteSetup from "./routerSet/routerSetup";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteSetup />
      </div>
    </Provider>
  );
}

export default App;
