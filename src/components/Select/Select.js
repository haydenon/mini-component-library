import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: transparent;
  border: none;
  outline: none;
`;

const CustomSelect = styled.div`
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 2px solid #4374cb;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  padding-top: 2px;
  display: inline-block;
`;

const Content = styled.span`
  padding-right: 24px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        <Content>{displayedValue}</Content>
        <SelectIcon id="chevron-down" size={16} strokeWidth={3}></SelectIcon>
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
