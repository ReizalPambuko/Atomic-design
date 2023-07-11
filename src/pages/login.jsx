import React, { Children } from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login">
        <FormLogin />
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-blue-700">
            Register
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
