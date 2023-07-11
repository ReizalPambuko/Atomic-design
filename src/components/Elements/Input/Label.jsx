import React, { Children } from "react";

const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm text-slate-500 font-bold mb-3"
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
