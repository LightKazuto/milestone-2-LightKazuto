import { useState } from "react";
import pngegg from "../Asset/pngegg.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function PokeLogin() {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required to fill"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
        const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();
      console.log('response success', result)
      alert('Login success')
      localStorage.setItem('token', result.token)
      // navigate('/dashboard')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}>
        <div className="w-96 border border-red-500 border-4 rounded-xl bg-white">
          <div className="bg-red-500 p-1 ">
            <img src={pngegg} alt="Pokemon Logo" />
          </div>
          <h1 className="mt-10 text-3xl font-mono">Login</h1>
          <Form className="flex flex-col mt-3 p-5">
            <Field
              name="email"
              type="email"
              placeholder="Input Your Email..."
              className="border border-gray-300 p-2 mb-4 rounded-md"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              name="password"
              type="password"
              placeholder="Input Your Password..."
              className="border border-gray-300 p-2 mb-4 rounded-md"
            />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
              Login
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
