import React from "react";
import InputForm from "../Elements/Input";
import Button from "../../components/Elements/Button";

const FormRegister = () => {
  return (
    <>
      <form>
        <InputForm
          label="Fullname"
          htmlFor="fullname"
          type="text"
          name="fullname"
          placeholder="Cth: Reizal Pambuko"
        />

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

        <InputForm
          label="Confirm Password"
          htmlFor="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="********"
        />

        <Button classname="bg-blue-600 w-full shadow-sm">Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
