import React from "react";
import ReactDOM from "react-dom/client";
import "assets/css/index.css";
import { Provider } from "react-redux";
import store from "store";
import { RouterProvider } from "react-router-dom";
import routes from "routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
);
