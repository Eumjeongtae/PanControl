import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MainPage from "./page/MainPage/MainPage";
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import PanControlPage from "./page/PanControlPage/PanControlPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/panControl', element: <PanControlPage /> },
      { path: '/*', element: <MainPage /> },
    ],
  },
]);

// Retrieve the element and check if it's null
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
