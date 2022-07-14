import Index from "./pages/Index";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
