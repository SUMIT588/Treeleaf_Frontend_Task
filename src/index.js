import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddDetails from "./components/AddDetails";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import ViewDetails from "./components/ViewDetails";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AddDetails />,
      },

      {
        path: "/viewDetails/:userId",
        element: <ViewDetails />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
