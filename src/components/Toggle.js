import { Children, useState } from "react";
import React from "react";
import { motion } from "framer-motion";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      <h1>{toggle ? children : ""}</h1>
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default Toggle;
