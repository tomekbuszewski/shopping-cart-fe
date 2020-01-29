import * as React from "react";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  margin: auto;
  
  ${props => props.theme.breakpoints.tablet} {
    max-width: 650px;
  }
  
  ${props => props.theme.breakpoints.desktop} {
    max-width: 1100px;
  }
`;

export { Container };
