import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";

type formValue = {
  email: string;
  password: string;
};

const initialValues: formValue = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className=" container max-w-lg mx-auto">
      <div className="rounded px-8 pt-6 pb-8 mb-4">
        <div className=" ">
          <h1 className="text-xl font-serif font-semibold">Log In</h1>
        </div>
        <form action="" className=" px-8 pt-6 pb-8 mb-4">
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
            />
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
            />
          </div>
          <div className="p-4">
            <button className=" w-full py-2 flex justify-center items-center gap-4 bg-buttonBg font-bold rounded-md shadow-xl text-text hover:bg-hover  hover:transition-all hover:ease-in-out duration-200 text-sm uppercase  hover:border-heading cursor-pointer">
              Log In
            </button>
          </div>
          <div className="p-4">
            <button className="flex justify-center items-center gap-4 mb-3  w-full rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal border-2 mt-6 hover:border-heading cursor-pointer">
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

export default LoginForm;
