import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import AuthProvider from "./provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

AOS.init({
  duration: 1000,
  once: false,
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </StrictMode>
  </AuthProvider>
);
