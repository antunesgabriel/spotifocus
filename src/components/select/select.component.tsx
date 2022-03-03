import React from "react";

const Select: React.FC<React.HTMLProps<HTMLSelectElement>> = ({
  children,
  ...rest
}) => {
  return (
    <select
      className="border-brand-darkest border-2 bg-white bg-opacity-10
     text-gray-300 bg-transparent text-sm rounded-full 
     focus:ring-brand-darkgrey focus:border-brand-darkgrey focus:outline-none 
    block w-full py-2.5 px-3"
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select;
