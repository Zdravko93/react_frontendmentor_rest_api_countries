import React from "react";

export default function Image({ source, altText, className }) {
  return <img src={source} alt={altText} className={className}></img>;
}
