import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, setError } from "../../Features/SignInSlice";
import { useNavigate, NavLink } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.signUp.users);
  const error = useSelector((state) => state.signIn.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // User check karo
    const userFound = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (userFound) {
      dispatch(signIn(userFound)); // login successful
      navigate("/"); // home page pe redirect karo
    } else {
      dispatch(setError("Invalid email or password"));
    }
  };

  return (
    <div className="min-h-screen font-[Montserrat] bg-gradient-to-br from-violet-600  to-purple-400 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="you@example.com"
              required
              onChange={handleOnChange}
              value={formData.email}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="••••••••"
              required
              onChange={handleOnChange}
              value={formData.password}
            />
          </div>

          {error && (
            <p className="text-red-500 text-center font-semibold">{error} & Please Sign Up first and then refill this again</p>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-violet-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
