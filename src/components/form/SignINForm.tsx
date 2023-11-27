import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const userSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues: formValue = {
  email: "",
  password: "",
};

type formValue = {
  email: string;
  password: string;
};

type registerFormProps = {
  onSubmit: (values: formValue) => void;
  email: string;
  password: string;
};

const RegisterForm: React.FC<registerFormProps> = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        try {
          const userSignUp = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = userSignUp.user;

          if (user) {
            setSuccessMessage("Account created successfully");

            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          }
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } catch (error) {
          console.log(error);
        }

        action.resetForm();
      },
    });

  return (
    <div className="container max-w-lg mx-auto">
      {successMessage && (
        <div className="text-green-800 text-center font-bold mb-4">
          {successMessage}
        </div>
      )}
      <div className="rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-serif font-semibold uppercase">Sign up</h1>
        <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className=" mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="email"
              autoCapitalize="off"
              name="email"
              id="name"
              placeholder="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500"> {errors.email} </p>
            ) : null}
          </div>
          <div className=" mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="password"
              autoCapitalize="off"
              name="password"
              id="password"
              placeholder="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500"> {errors.password} </p>
            ) : null}
          </div>
          <div className="p-4">
            <button
              type="submit"
              className=" w-full py-2 flex justify-center items-center gap-4 bg-buttonBg font-bold rounded-md shadow-xl text-text hover:bg-hover  hover:transition-all hover:ease-in-out duration-200 text-sm uppercase  hover:border-heading cursor-pointer"
            >
              Sign Up
            </button>
          </div>
          <div className="font-serif text-center uppercase font-bold text-heading">
            <p>Already have an account? </p>
          </div>
          <div className="font-serif flex justify-center items-center pt-6 pb-2 mb-4">
            <Link
              className=" text-heading border-b-4 border-violet-800 hover:text-text text-xl font-serif font-semibold uppercase"
              to="/login"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
