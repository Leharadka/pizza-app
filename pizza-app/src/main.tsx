import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error as ErrorPage } from "./pages/Error/Error.tsx";
import { Layout } from "./layout/Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios, { type AxiosResponse } from "axios";
import { PREFIX } from "./helpers/API.ts";
import { AuthLayout } from './layout/Auth/AuthLayout.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Register } from './pages/Registert/Register.tsx';

const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: '/product/:id',
    element: `<Product />`,
    loader: async ({ params }) => {
        const data = axios.get(`${PREFIX}/products/${params.id}`).then(res => res.data);
        return { data };
    }
},

{
  path: '/auth',
  element: <AuthLayout/>,
  children: [
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'register',
      element: <Register/>
    }
  ]
},
  
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
function defer(arg0: { data: Promise<AxiosResponse<any, any, {}>> }): unknown {
  throw new Error("Function not implemented.");
}
