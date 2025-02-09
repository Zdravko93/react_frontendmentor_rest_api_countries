import React from "react";

export default function Button({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button onClick={onClick || null} className={className} {...props}>
      {children}
    </button>
  );
}
