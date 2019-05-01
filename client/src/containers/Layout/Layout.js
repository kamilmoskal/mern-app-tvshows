import React from "react";

const Layout = props => {
  return (
    <>
      <nav />
      <main>{props.children}</main>
      <footer />
    </>
  );
};

export default Layout;
