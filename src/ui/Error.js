import * as React from "react";
import styled from "styled-components";

export const Error = styled.div`
  background: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.base};
  font-size: ${props => props.theme.fonts.sizes.large};
  text-align: center;
  padding: 24px 0;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
