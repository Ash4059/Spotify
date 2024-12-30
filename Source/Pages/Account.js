import React from "react";
import store from "../Utils/Store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Utils/userSlice";
import UserDetails from "../Components/UserDetails";

const Account = () => {
  const user = useSelector((store) => store.user?.user?.userData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser(null));
  }
  return (
    <div className="max-w-2xl mx-auto p-4">
      {" "}
      <h1 className="text-3xl font-bold mb-4">Account Information</h1>{" "}
      {user ? (
        <>
          {" "}
          <UserDetails user={user} />{" "}
          <button
            onClick={handleLogout}
            className="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded hover:bg-red-700"
          >
            {" "}
            Logout{" "}
          </button>{" "}
        </>
      ) : (
        <p className="text-xl">User information not found.</p>
      )}{" "}
    </div>
  );
};

export default Account;
