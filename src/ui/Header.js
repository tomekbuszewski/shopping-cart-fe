import * as React from "react";
import styled, { css } from "styled-components";

export const Header = styled.h1`
  font-weight: 700;
  font-size: ${props => props.theme.fonts.sizes.large};
  color: ${props => props.theme.colors.accent};
  margin: 0;
  padding: 0 8px 16px;
  margin: ${props => props.border && "16px 0"};
  border-bottom: ${props => props.border && `1px solid ${props.theme.colors.accentBright}`};
  
  ${props => (props.as === "h3" || props.as === "h4") && css`
    font-size: ${props => props.theme.fonts.sizes.base};
  `};
`;

Header.defaultProps = {
  border: true,
};
