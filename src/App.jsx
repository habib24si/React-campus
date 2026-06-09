import React, { Suspense } from "react";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const FiturXyz = React.lazy(() => import("./pages/FiturXyz"))
// const Notes = React.lazy(() => import("./pages/Notes"))

/* Product */
const Product = React.lazy(() => import("./pages/products"));

/* Detail Product */
const DetailProduct = React.lazy(() =>
  import("./pages/DetailProduct")
);

/* Detail Customer */
const DetailCustomer = React.lazy(() =>
  import("./pages/DetailCustomer")
);

/* Auth */
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />

          {/* fitur xyz */}
          <Route path="/fiturXyz" element={<FiturXyz />} />

          <Route path="/notes" element={<Notes />} />

          {/* Detail Customer */}
          <Route
            path="/customers/:id"
            element={<DetailCustomer />}
          />

          {/* Product */}
          <Route path="/product" element={<Product />} />

          {/* Detail Product */}
          <Route
            path="/product/:id"
            element={<DetailProduct />}
          />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />

        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot" element={<Forgot />} />

        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;