import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import ErrorPage from "./ErrorPage/ErrorPage";
import Homepage from "./Homepage/Homepage";
import ShoppingCart from "./Shopping Cart/ShoppingCart";
import Shop from "./Shop/Shop";
import useStoreInfo from "./hooks/useStoreInfo";

function Routes() {
  const productsState = useStoreInfo();
  // if (productsState.loading) {
  //   return <div>Loading...</div>;
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Navigate to="homepage" replace /> },
        { path: "homepage", element: <Homepage /> },
        {
          path: "shop",
          element: <Shop products={productsState.data} loading={productsState.loading} error={productsState.error} />,
        },
        { path: "shop/cart", element: <ShoppingCart /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
