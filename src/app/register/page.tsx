"use client";
// components/SignupPage.js
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    password:"",
    email: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3500/api2/createuser", user);
      router.push("/login");
    } catch (error) {
      // @ts-ignore
      console.log("Signup failed", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={onSignup}
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue-500 hover:text-blue-600">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
