import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
const HomePage = lazy(() => import("./pages/Home"));
const RegisterForm = lazy(() => import("./pages/SignUp"));
const Demo = lazy(() => import("./pages/Demo"));
const ContactPage = lazy(() => import("./pages/Contact"));
const LogIn = lazy(() => import("./pages/LogIN"));
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center mt-4 pt-10">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#008080", "#FFA500"]}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<RegisterForm />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
