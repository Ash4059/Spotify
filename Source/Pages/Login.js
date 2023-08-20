import React, { useState } from "react";
import { oAuth } from "../Utils/APIAuth/oAuth";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    oAuth(userName,password);
  };

  return (
    <div className="">
      <form className="m-4 flex flex-col" onSubmit={handleSubmit}>
        <label>
          Enter your username :
          <input
            type="email"
            value={userName}
            className="border border-black"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          Enter your password :
          <input
            type="password"
            className="border border-black"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
