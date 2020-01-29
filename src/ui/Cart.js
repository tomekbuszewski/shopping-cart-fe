import * as React from "react";
import styled from "styled-components";

import { Button } from "./Button";

export const Cart = styled(props => {
  return (
    <aside className={props.className}>
      <Button accent medium onClick={props.setter} style={{ transform: "200%"}}>{
        props.active ? "×" : "="
      }</Button>
      {props.children}
    </aside>
  )
})`
  transition: transform 200ms ease-in-out;
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: calc(95vw - 40px);
  top: 0;
  right: 0;
  z-index: 10;
  transform: translateX(${props => props.active ? "0" : "100%"});
  
  display: flex;
  flex-flow: column;
  
  background: ${props => props.theme.colors.base};
  padding: 16px;
  border-left: 1px solid ${props => props.theme.colors.baseDark};
  
  ${props => props.theme.breakpoints.tablet} {
    max-width: 360px;
  }
  
  > ${Button} {
    position: absolute;
    top: 0;
    left: -40px;
  }
`;
