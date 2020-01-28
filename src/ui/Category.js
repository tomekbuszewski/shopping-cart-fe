import * as React from "react";
import styled from "styled-components";

export const Category = styled.span`
  background: ${props => props.theme.colors.accentBright};
  color: ${props => props.theme.colors.base};
  font-weight: bold;
  font-size: ${props => props.theme.fonts.sizes.small};
  padding: 4px 8px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 8px;
`;
