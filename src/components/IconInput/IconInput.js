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
  padding-bottom: 4px;
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 4;
  left: 0;
  margin: auto;
`;

const Input = styled.input`
  padding-left: 26px;
  border: none;
  outline-offset: 4px;
  width: 100%;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = { "--width": `${width}px` };
  return (
    <Wrapper style={style}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={16} strokeWidth={2} />
      <Input placeholder={placeholder}></Input>
    </Wrapper>
  );
};

export default IconInput;
