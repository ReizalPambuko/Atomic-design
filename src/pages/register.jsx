import React, { Children } from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register">
        <FormRegister />
        <p>
          Don't have an account?{" "}
          <Link to="/login" className="font-bold text-blue-700">
            Login
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
