import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import AllVehicle from "../pages/AllVehicle";
import Home from "../pages/Home";
import MyVehicle from "../pages/private/MyVehicle";
import MyBooking from "../pages/private/MyBooking";
import ViewDetails from "../pages/private/ViewDetails";
import AddVehicle from "../pages/private/AddVehicle";
import UpdateVehicle from "../pages/private/UpdateVehicle";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import ResetPassword from "../pages/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-vehicles",
        element: <AllVehicle></AllVehicle>,
      },
      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicle></MyVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/vehicle-details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/add-vehicle",
        element: (
          <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-vehicle/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicle></UpdateVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
