import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <div>
      <input
        type={type}
        className="text-sm rounded border w-full py-2 px-3 text-slate-700"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
