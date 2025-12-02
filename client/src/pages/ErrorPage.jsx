import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gray-100">
      <h1 className="text-4xl sm:text-7xl font-extrabold text-gray-500">404</h1>

      <p className="text-xl sm:text-2xl font-semibold mt-3 text-gray-700">
        Oops! Page Not Found 😕
      </p>

      <p className="text-gray-500 mt-2 mb-6 max-w-md">
        {error?.statusText ||
          error?.message ||
          "Something went wrong. The page you were looking for doesn’t exist."}
      </p>

      <Link
        to="/"
        className="btn bg-blue-900  text-white shadow transition-all duration-300"
      >
        Go Back Home
      </Link>

      <div className="mt-10 opacity-60 text-sm">
        <p>Error Code: {error?.status || "Unknown"}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
