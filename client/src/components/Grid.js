import React from "react";

// this is to export this file and its elements
// so it can be utilized anywhere in the front end

export function Container({fluid, children}) {
  return <div className={`container${fluid ? "-fluid" : ""} `}>{children}</div>
}

export function Row ({ fluid,children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Col({size, children}){
  return(
    <div
    className={size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ")
    }>{children}</div>
  );
}