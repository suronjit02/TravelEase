import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {
        setMessage("Reset link sent! Check your Gmail.");
        setError("");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        setError(error.code);
        setMessage("");
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-white rounded-md border shadow-md p-6 sm:p-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-900 mb-6">
          Reset Password
        </h2>

        <div className="flex flex-col gap-4">
          <label className="font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            required
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full focus:outline-none"
          />

          {message && <p className="text-green-600 mt-1">{message}</p>}
          {error && <p className="text-red-600 mt-1">{error}</p>}

          <button className="btn mt-4 w-full py-2 transition">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
