import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // For navigation after signup
import { auth } from "../firebase/firebaseConfig"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; // Firebase Auth method
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Assuming AuthContext is setup for managing auth state

const Signup = () => {
  const { setUser } = useContext(AuthContext); // Using context to store user
  const history = useHistory(); // To navigate after successful signup

  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error handling

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Set user state in AuthContext
      setUser(user);

      // Redirect to home page or dashboard after successful signup
      history.push("/");

    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
      
      {/* Error message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            minLength={6}
          />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 hover:text-indigo-700">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Signup;
