import React from "react";

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    console.log("Logged in!");
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;