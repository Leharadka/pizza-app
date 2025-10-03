import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error } from "./pages/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <Cart />,
      },
      {
        path: "/cart",
        element: <Menu />,
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>
);
