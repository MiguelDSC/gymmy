import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>Page does not exist, </h1> <br />
        <Link to={`/`}>Click here to return to home</Link>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
