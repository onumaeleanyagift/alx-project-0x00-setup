import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`px-4 py-2 text-white bg-blue-500 ${className}`}>
      {title}
    </button>
  );
};

export default Button;
