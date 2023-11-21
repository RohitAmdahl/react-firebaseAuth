import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Home"));
const FactPage = lazy(() => import("./pages/Faq"));

function App() {
  return (
    <>
      <Suspense fallback={<div> loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/faq" element={<FactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
