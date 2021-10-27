import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Hide, Image } from "../style";
import { titleAnimation, fade, photoAnim } from "../Animation";
import { Link } from "react-router-dom";
import Wave from "./Wave";
function AboutSection() {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };

  //   <motion.div
  //   className="title"
  //   variants={container}
  //   initial="hidden"
  //   animate="show"
  // >
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contactus">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Loading" />
      </Image>
      <Wave />
    </About>
  );
}
//styled component

export default AboutSection;
