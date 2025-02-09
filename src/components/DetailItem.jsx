import React from "react";

import { Link } from "react-router-dom";

export default function DetailItem({
  label,
  value,
  headerLevel = "h4",
  ...props
}) {
  const HeaderTag = headerLevel;

  if (props.isCurrencyList && Array.isArray(value)) {
    return (
      <HeaderTag>
        {label && `${label}:`}
        <ul className={props.className}>
          {value.map((currency) => (
            <React.Fragment key={currency.name}>
              <li>
                <span>
                  {currency.name}, {currency.symbol}
                </span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </HeaderTag>
    );
  }

  if (props.isBorderList && Array.isArray(value)) {
    return (
      <>
        <HeaderTag>{label}: </HeaderTag>
        <ul className={props.className}>
          {value.length > 0 ? (
            value.map((border) => (
              <li key={border}>
                <Link
                  to={`/country-details/${border}`}
                  className={props.linkClassName}
                >
                  {border}
                </Link>
              </li>
            ))
          ) : (
            <p className={props.noBorderTextClassName}>
              No border countries available
            </p>
          )}
        </ul>
      </>
    );
  }

  if (props.isLanguageList && Array.isArray(value)) {
    return (
      <HeaderTag>
        {label && `${label}:`}
        <span className={props.className}>{value.join(", ")}</span>
      </HeaderTag>
    );
  }

  if (headerLevel === "h2") {
    return <HeaderTag className={props.className}>{value}</HeaderTag>;
  }

  return (
    <HeaderTag className={props.className}>
      {label && `${label}:`} <span>{value}</span>
    </HeaderTag>
  );
}
