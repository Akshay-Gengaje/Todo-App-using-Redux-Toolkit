import React from "react";

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-semibold rounded-lg ${className} hover:scale-105 transition-transform duration-200 ease-in-out`}
  >
    {children}
  </button>
);

export default Button;
