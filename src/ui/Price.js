import * as React from "react";
import styled from "styled-components";

export const Price = styled.span`
  font-size: ${props => props.theme.fonts.sizes.large};
  font-weight: bold;
  color: ${props => props.theme.colors.breakage};
`;
