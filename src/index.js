// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

import rootReducer from "./Services/Reducer/RootReducer";

import App from "./App";

const store = configureStore({ reducer: { rootReducer } });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
