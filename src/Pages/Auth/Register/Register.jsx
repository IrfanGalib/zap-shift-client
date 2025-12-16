import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log("After Register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required.</p>
          )}

          {/* Password */}
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type == "required" && (
            <p className="text-red-500">Password is Required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password Must Be 6 Characters or Longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password Must Have at least one uppercase, at least one lowercase,
              at least one number, and at least one special characters.
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
          <h2 className="font-bold text-center text-">
            Already Have an Account?{" "}
            <span className="link link-hover text-secondary">
              <Link to="/login">Login</Link>
            </span>
          </h2>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
