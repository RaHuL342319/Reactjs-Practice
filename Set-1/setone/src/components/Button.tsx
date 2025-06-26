import React from "react";

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  borderRadius: string;
  padding: string;
};

const Button = ({
  backgroundColor,
  color,
  borderRadius,
  padding,
  children,
}: Props) => {
  return (
    <button
      style={{
        backgroundColor,
        color,
        borderRadius,
        padding,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
