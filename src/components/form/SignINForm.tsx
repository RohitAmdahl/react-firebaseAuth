import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        try {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          navigate("/demo");
        } catch (error) {
          console.log(error);
        }

        action.resetForm();
      },
    });

  return (
    <div className="container max-w-lg mx-auto">
      <div className="rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-serif font-semibold uppercase">Log In</h1>
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
              Log In
            </button>
          </div>
          <div className="p-4">
            <button
              type="submit"
              className="flex justify-center items-center gap-4 mb-3  w-full rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal border-2 mt-6 hover:border-heading cursor-pointer"
            >
              <span>
                <FcGoogle size={20} />
              </span>
              Log In with Google Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
