import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Watch from "./pages/Watch";

import Dashboard from "./pages/Dashboard";
import MyNotes from "./pages/MyNotes";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "/",   
        element: <Home />,
      },
            {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
      path:"/dashboard",
      element:<Dashboard/>,
      },
      {
        path:"/watch/:id",
        element:<Watch/>
      },
      {
      path:"/my-notes",
      element:<MyNotes/>
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);