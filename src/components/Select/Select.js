import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  outline: none;
`;

const CustomSelect = styled.div`
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-size: ${16 / 16}rem;

  ${NativeSelect}:focus + & {
    outline: 2px solid #4374cb;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": "16px" }}>
          <Icon id="chevron-down" size={16} strokeWidth={3}></Icon>
        </IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
