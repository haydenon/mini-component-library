/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px 0px ${COLORS.transparentGray35};
`;

const Trimmer = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
`;

const wrapperSizeStyles = (size) => {
  switch (size) {
    case "large":
      return {
        "--padding": "4px",
        "--borderRadius": "8px",
        "--height": "24px",
      };
    case "small":
      return {
        "--padding": "0",
        "--borderRadius": "4px",
        "--height": "8px",
      };
    case "medium":
    default:
      return {
        "--padding": "0",
        "--borderRadius": "4px",
        "--height": "12px",
      };
  }
};

const ProgressBar = ({ value, size }) => {
  value = Math.min(Math.max(value, 0), 100);
  const sizeStyles = wrapperSizeStyles(size);
  const barStyles = {
    "--width": `${value}%`,
  };
  return (
    <Wrapper style={sizeStyles}>
      <Trimmer>
        <Bar
          style={barStyles}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </Trimmer>
    </Wrapper>
  );
};

export default ProgressBar;
