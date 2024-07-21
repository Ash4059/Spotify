import React from "react";
import { Link } from "react-router-dom";

const UserForm = ({ mode }) => {
  const isSignUp = mode === "Sign Up";

  return (
    <div className=" text-gray-700 p-8 rounded w-full h-[54vh] max-w-md overflow-auto no-scrollbar shadow-lg shadow-gray-100">
      <h2 className="text-2xl text-white font-bold mb-2 text-center">{mode}</h2>
      <form>
        {isSignUp && (
          <>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="userName">
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="emailId">
            Email
          </label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className={isSignUp ? "mb-4" : "mb-8"}>
          <label className="block text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>
        {isSignUp && (
          <>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-8">
              <label className="block text-white mb-2" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select your country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="United Kingdom">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          {mode}
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-100">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
        </p>
        <Link
          to={isSignUp ? "/login" : "/signup"}
          className="text-blue-500 hover:underline"
        >
          {isSignUp ? "Login" : "Sign up"}
        </Link>
      </div>
    </div>
  );
};

export default UserForm;
