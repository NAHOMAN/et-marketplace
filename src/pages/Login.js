import React from 'react';

const Login = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;