import React from "react";
import InputForm from "../Elements/Input";
import Button from "../../components/Elements/Button";

const FormLogin = () => {
  return (
    <>
      <form>
        <InputForm
          label="Email"
          htmlFor="email"
          type="email"
          name="email"
          placeholder="Example@gmail.com"
        />

        <InputForm
          label="Password"
          htmlFor="password"
          type="password"
          name="password"
          placeholder="********"
        />

        <Button classname="bg-blue-600 w-full shadow-sm">Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
