import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createUser(data.email, data.password);
      /* if (createUser.user) {
        toast.success("User Registered Successfully");
      } else {
        toast.error("This email is already registered!");
      } */
    } catch (error) {}
  };
  return (
    <div
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="min-h-screen flex items-center justify-center bg-base-200 py-10"
    >
      <Helmet>
        <title>ConcertX | Register</title>
      </Helmet>
      <div className="bg-base-100 shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-accent mb-6">
          Create an Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
              {...register("name")}
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
              {...register("image")}
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
              {...register("email")}
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
              {...register("password")}
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
              {...register("confirmPassword")}
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
