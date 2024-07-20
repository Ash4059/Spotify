import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-white p-8 rounded w-full max-w-md">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-gray-100 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-100">Don't have an account?</p>
        <Link
          to="/signup"
          className="text-blue-500 hover:underline"
          onClick={() => alert("Redirect to signup page")}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
