import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  display: block;
  position: relative;

  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  padding-left: var(--paddingIcon);
  border: none;
  outline-offset: 4px;
  width: var(--width);
  height: var(--height);
  border-bottom: solid var(--borderThickness) ${COLORS.black};

  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);

  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    paddingIcon: 24,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    paddingIcon: 36,
    borderThickness: 3,
    height: 36,
  },
};

const getInputStyles = ({
  fontSize,
  paddingIcon,
  borderThickness,
  height,
}) => ({
  "--fontSize": `${fontSize / 16}rem`,
  "--paddingIcon": `${paddingIcon}px`,
  "--borderThickness": `${borderThickness}px`,
  "--height": `${height / 16}rem`,
});

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeStyles = SIZES[size] || SIZES["small"];
  const inputStyles = {
    ...getInputStyles(sizeStyles),
    "--width": `${width}px`,
  };
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon
        id={icon}
        paddingBottom={`${sizeStyles.paddingBottom}px`}
        size={sizeStyles.iconSize}
        strokeWidth={2}
      />
      <Input style={inputStyles} placeholder={placeholder}></Input>
    </Wrapper>
  );
};

export default IconInput;
