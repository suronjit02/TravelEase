import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import AllVehicle from "../pages/AllVehicle";
import Home from "../pages/Home";
import MyBooking from "../dashboard/dashboardPages/private/MyBooking";
import MyVehicle from "../dashboard/dashboardPages/private/MyVehicle";
import ViewDetails from "../dashboard/dashboardPages/private/ViewDetails";
import AddVehicle from "../dashboard/dashboardPages/private/AddVehicle";
import UpdateVehicle from "../dashboard/dashboardPages/private/UpdateVehicle";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import ResetPassword from "../pages/ResetPassword";
import About from "../pages/About";
import DashboardLayout from "../layout/DashboardLayout";
import Faq from "../pages/Faq";
import Profile from "../dashboard/dashboardPages/private/Profile";
import DashboardHome from "../dashboard/dashboardPages/private/DashboardHome";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/vehicle-details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicle></MyVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-vehicle",
        element: (
          <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-vehicle/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicle></UpdateVehicle>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "*",
      //   element: <NotFindPage></NotFindPage>,
      // },
    ],
  },
]);

export default router;
