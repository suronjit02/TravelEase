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
        element: <MyVehicle></MyVehicle>,
      },
      {
        path: "/my-bookings",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/view-details",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/add-vehicle",
        element: <AddVehicle></AddVehicle>,
      },
      {
        path: "/update-vehicle",
        element: <UpdateVehicle></UpdateVehicle>,
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
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
