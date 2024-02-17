import React from "react";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      type='button'
      className='bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2 ml-4'
    >
      {title}
    </button>
  );
}

export default Button;
