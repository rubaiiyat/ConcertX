import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="min-h-screen flex items-center justify-center bg-base-200 py-10"
    >
      <div className="bg-base-100 shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-accent mb-6">
          Create an Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Already have account */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-accent font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-accent w-full mt-4 font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
