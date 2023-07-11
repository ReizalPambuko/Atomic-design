import React from "react";

const Button = (props) => {
  const { classname = "bg-slate-700", children = "..." } = props;
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
