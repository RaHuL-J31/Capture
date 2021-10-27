import React from "react";
import { motion } from "framer-motion";
import { PageAnimation, titleAnimation } from "../Animation";
import styled from "styled-components";
function ContactUs() {
  return (
    <ContactStyle
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circles />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circles />
            <h2>Send an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circles />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 1rem;
    font-size: 10%;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
    h2 {
      font-size: 3rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circles = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: white;
  @media (max-width: 1500px) {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1.2rem;
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
export default ContactUs;
