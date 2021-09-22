import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  display: block;
  border-bottom: solid 1px ${COLORS.black};
  position: relative;
  width: var(--width);
`;

const Input = styled.input`
  padding-left: 26px;
  border: none;
  outline-offset: 4px;
  width: 100%;
  padding-bottom: 4px;
  border-radius: 2px;

  font-size: ${14 / 16}rem;

  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 4px;
  left: 0;
  margin: auto;
  color: ${COLORS.gray700};

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = { "--width": `${width}px` };
  return (
    <Wrapper style={style}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder}></Input>
      <InputIcon id={icon} size={16} strokeWidth={2} />
    </Wrapper>
  );
};

export default IconInput;
