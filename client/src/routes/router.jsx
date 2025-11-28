import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
]);

export default router;
