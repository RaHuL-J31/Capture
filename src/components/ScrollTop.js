import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollTop() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
}

export default ScrollTop;
