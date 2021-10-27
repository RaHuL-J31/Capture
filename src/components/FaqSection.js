import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              beatae quisquam aliquid? Ab minima accusantium tempora tempore
              eveniet nobis amet?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule.">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              beatae quisquam aliquid? Ab minima accusantium tempora tempore
              eveniet nobis amet?
            </p>
          </div>
        </Toggle>
        <Toggle title="Diffrent Payment method.">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              beatae quisquam aliquid? Ab minima accusantium tempora tempore
              eveniet nobis amet?
            </p>
          </div>
        </Toggle>
        <Toggle title="Product offered by us.">
          <div className="answer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              beatae quisquam aliquid? Ab minima accusantium tempora tempore
              eveniet nobis amet?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
