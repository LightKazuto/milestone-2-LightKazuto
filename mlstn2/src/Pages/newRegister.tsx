import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import pngegg from "../Asset/pngegg.png";
import background from "../Asset/background.jpg";
import starter1 from "../Asset/starter1.png";

export default function PokeNewRegister() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required to fill"),
    email: Yup.string().required("Email is required to fill"),
    password: Yup.string().required("Password is required to fill"),
  });

  async function HandleRegister(values: any) {
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/register",
      options
    );
    const result = await response.json();

    try {
      if (!response.ok) {
        alert("Register Failed");
      } else {
        console.log("Resister Success", result);
        alert("Register Success");
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
    console.log("Register", result);
  }

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="min-h-screen flex items-center justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={HandleRegister}>
          <div className="w-96 border border-gray-200 border-2 shadow-2xl rounded-xl bg-white">
            <a onClick={() => navigate("/")}>
              <p className="text-right mr-5 mt-1 font-extrabold text-gray-500 text-lg cursor-pointer">X</p>
            </a>
            <div className=" p-1 flex items-center justify-center mt-8 pb-5">
              <img src={pngegg} alt="Pokemon Logo" className="w-3/4" />
            </div>
            <div className=" my-5 mx-8">
              <h1 className="font-bold text-xl mb-3">
                Enter Your Profil Account
              </h1>
              <p className="text-center">
                Please enter accurate information. It may be needed to recover
                your account should you forget your username or password.
              </p>
            </div>
            <Form className="flex flex-col mt-3 p-5 items-center justify-center">
              <Field
                name="name"
                type="text"
                placeholder="Enter Your Name..."
                className="border border-gray-300 p-2 mb-5 rounded-md w-80"
              />
              <ErrorMessage name="name" component="div" />

              <Field
                name="email"
                type="email"
                placeholder="Enter Your Email..."
                className="border border-gray-300 p-2 mb-5 rounded-md w-80"
              />
              <ErrorMessage name="email" component="div" />

              <Field
                name="password"
                type="password"
                placeholder="Enter Your Password..."
                className="border border-gray-300 p-2 mb-5 rounded-md w-80"
              />
              <ErrorMessage name="password" component="div" />
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold py-2 rounded-md w-80 hover:bg-orange-600 transition-colors duration-300">
                Login
              </button>
            </Form>
          </div>
        </Formik>
      </div>
      <div>
        <img
          src={starter1}
          alt="image pokemon starter 1"
          className="w-1/4 bottom-10 right-20 absolute"
        />
      </div>
    </div>
  );
}
