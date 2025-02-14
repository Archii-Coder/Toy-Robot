import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        min-w-[60px] w-full h-[60px]
        border-2 border-gray-900 rounded-md
        hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300
        transition-colors duration-150
        select-none 
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
