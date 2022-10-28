import React from "react";
import RouteSetup from "./routerSet/routerSetup";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouteSetup />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
