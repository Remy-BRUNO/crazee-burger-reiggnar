import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage.jsx"
import OrderPage from "./pages/order/OrderPage.jsx"
import ErrorPage from "./pages/error/ErrorPage.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/order/:name",
      element: <OrderPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
