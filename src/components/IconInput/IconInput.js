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
  padding-left: calc(var(--paddingIcon) + 10px);
  border: none;
  outline-offset: 4px;
  width: 100%;
  padding-bottom: var(--paddingBottom);
  border-radius: 2px;
  line-height: var(--lineHeight);

  font-size: var(--fontSize);

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
  bottom: ${(p) => p.paddingBottom};
  left: 0;
  margin: auto;
  color: ${COLORS.gray700};

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

const SIZES = {
  small: {
    fontSize: 14,
    lineHeight: 16,
    strokeWidth: 2,
    paddingIcon: 12,
    paddingBottom: 4,
  },
  large: {
    fontSize: 18,
    lineHeight: 21,
    strokeWidth: 3,
    paddingIcon: 22,
    paddingBottom: 6,
  },
};

const getInputStyles = ({
  fontSize,
  paddingIcon,
  paddingBottom,
  lineHeight,
}) => ({
  "--fontSize": `${fontSize / 16}rem`,
  "--paddingIcon": `${paddingIcon}px`,
  "--paddingBottom": `${paddingBottom}px`,
  "--lineHeight": `${lineHeight}px`,
});

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeStyles = SIZES[size] || SIZES["small"];
  const wrapperStyles = { "--width": `${width}px` };
  return (
    <Wrapper style={wrapperStyles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={getInputStyles(sizeStyles)}
        placeholder={placeholder}
      ></Input>
      <InputIcon
        id={icon}
        paddingBottom={`${sizeStyles.paddingBottom}px`}
        size={sizeStyles.lineHeight}
        strokeWidth={sizeStyles.strokeWidth}
      />
    </Wrapper>
  );
};

export default IconInput;
