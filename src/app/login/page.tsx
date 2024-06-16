"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Replace with your API endpoint for login
      const response = await axios.post("/api2/users/login", { email, password });

      // Assuming successful login redirects to home page "/"
      router.replace("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-800 p-8 rounded shadow-lg w-96">
        <h1 className="text-4xl text-white font-semibold mb-8 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Password"
            required
          />
          <div className="flex items-center">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-400 rounded focus:ring-blue-500"
                onChange={handleTogglePassword}
              />
              <span className="ml-2">Show Password</span>
            </label>
            <button
              type="submit"
              className="ml-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <Link href="/register" passHref>
          <div className="block font-bold text-center text-blue-500 hover:underline mt-2">
            Register Here
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
