import React from "react";

export const Header = (props) => {
  return (
    <>
        <header className="container-fluid p-3 bg-dark text-white text-center">
            <h1 className="fs-4 font-family-custom">{props.title}</h1>
        </header>
    </>
  );
};
